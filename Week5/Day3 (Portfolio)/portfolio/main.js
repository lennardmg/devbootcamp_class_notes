const chalk = require("chalk");
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8080;

const contentTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".jpg": "image/jpeg",
    ".json": "application/json",
    ".gif": "image/gif",
    ".png": "image/png",
    ".svg": "image/scg+xml",
};

const server = http.createServer((req, res) => {
    //// if we use just this, it would be possible to access other files in the parent directory etc. as well and
    //// could lead to security issues.
    // const filePath = __dirname + req.url;
    const filePath = path.join(__dirname, req.url);

    res.on("error", (error) => console.log("Error in response: ", error));
    req.on("error", (error) => console.log("Error in request: ", error));

    // if its NOT a GET request, end.
    if (req.method !== "GET") {
        res.statusCode = 400;
        res.end();
        return;
    }

    if (req.url === "/") {
        res.statusCode = 200;

        console.log("request URL", req.url);
        console.log("filePath", filePath);
        console.log("req headers", req.headers);
    }

    if (fs.statSync(filePath).isFile()) {
        console.log(path.extname(filePath));
        res.statusCode = 200;
        ////
        res.setHeader(
            "Content-Type",
            contentTypes[path.extname(filePath)] || "text/html"
        );
        const readStream = fs.createReadStream(filePath);

        readStream.pipe(res);

        readStream.on("end", () => {
            res.end();
        });
    }

    if (!fs.existsSync(filePath)) {
        res.statusCode = 404;
        res.end();
        return;
    }

    if (fs.statSync(filePath).isDirectory()) {
        if (!filePath.endsWith("/")) {
            // redirect 301
            res.statusCode = 301;
            res.setHeader("Location", `${req.url}/`);
            res.end();
            return;
        }
    }

    // console.log(req.method);
});

server.listen(PORT, console.log(chalk.red(`listening on Port ${PORT}`)));
