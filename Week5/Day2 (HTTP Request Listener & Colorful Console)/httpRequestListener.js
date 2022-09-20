const fs = require('fs');
const path = require('path');
const chalk = require("chalk");
const http = require("http");

const PORT = 8080;


const server = http.createServer((request, response) => {

    response.on("error", (error) => console.log("Error in response: ", error));
    request.on("error", (error) => console.log("Error in request: ", error));

    console.log("-------------------------------------------------");
    console.log("request method: ", request.method);
    console.log("request url: ", request.url);
    console.log("request headers: ", request.headers);  


    // Bonus Part 2: For each request made to your server, use fs.appendFile to add to a file named "requests.txt" a line 
    // with the following information in it: 1) The date and time (use Date) 2) The request method 3) The request url
    // 4) The user-agent request header 5) Separate each item in the line with a tab ('\t').
    let reqHeadersJSON = JSON.stringify(request.headers);

    function createText () {
             fs.appendFile(`${__dirname}/requests.txt`, 
            `${Date()}\t ${request.method}\t ${request.url}\t ${reqHeadersJSON}\t ${response.statusCode}\n`, 
            (err) => {
            if (err) throw err;
            console.log(`The request data was appended to file: ${chalk.yellow("requests.txt")}!`);
    })};
    

    // If the request method is GET or HEAD, set the content type of the response to 'text/html' and the status code to 200.
    if (request.method === "GET" || request.method === "HEAD") {

        response.setHeader("content-type", "text/html");
        response.statusCode = 200;

        createText();


        // If the request method is GET, send the following HTML as the body of the response:
        if (request.method === "GET") {
            response.write(`
                <!doctype html>
                <html>
                <title>Hello World!</title>
                <p>Hello World!</p>
                </html>
            `);
            response.end();


            // If the request method is HEAD, do not write a body before sending the response.
        } else if (request.method === "HEAD") {

            response.end();
        }

    // If the request method is POST, log the request body to the console. Do not write a body to the response. Instead, 
    // set the 'Location' header of the response to '/' and the status code to 302. This will cause a redirect.
    } else if (request.method === "POST") {
        
                let body = "";
        
                request.on("data", (chunk) => {
                    console.log("this is a chunk: ", chunk);
                    body += chunk;
                });
        
                request.on("end", () => {
                    console.log("this is my body: ", body);
                    response.end();
                });

        //console.log("request method: ", request.method);
        // console.log("request url: ", request.url);
        // console.log("request headers: ", request.headers);

        // console.log("the request itself: ", request);  
        console.log("request body: ", body);

                if (request.url !== "/") {
                    
                    response.setHeader("Location", "/");
                    response.statusCode = 302;
                }




        createText();

        response.end();


        // If the request method is not GET, HEAD, or POST, send a 405 status code.
    } else {
            response.statusCode = 405;

            createText();

            response.end();
    }
});


server.listen(PORT, () => console.log(`${chalk.red("Hey I am listening on PORT:")} ${chalk.magenta(PORT)}`));