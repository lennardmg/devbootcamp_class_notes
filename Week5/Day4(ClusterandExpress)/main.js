const chalk = require("chalk");
const path = require("path");

// for the authentication part
const basicAuth = require("basic-auth");

 const express = require("express");
 const app = express();

 const PORT = 8080;

 const cookieParser = require("cookie-parser");

 const { engine } = require("express-handlebars");
 app.engine("handlebars", engine());
 app.set("view engine", "handlebars");
 
 //// the middleware functions:

//  app.use(function logUrl(req, res, next) {
//      console.log("---------------");
//      console.log(`accessed at:\t${new Date(Date.now()).toString()}`);
//      console.log(`req.method:\t${req.method}\nreq.url:\t${req.url}`);
//      console.log("---------------");
//      console.log("what's in my usercookie", req.cookies); //<--- CAREFUL reading cookies is req.cookies
//      console.log("dirname: ", __dirname);
//      next(); // <-- exit a middleware
//     });

    
    app.use(
    express.urlencoded({
        extended: false,
    })
    );
    
    app.use(cookieParser());
    
    app.use((req, res, next) => {
        if (req.url === "/cookie" || req.url === "/favicon.ico") {
            next();
        } else {
            if (req.cookies.consent) {
                next();
            } else {
                res.cookie("lastURL", req.url);
                res.redirect("/cookie");
            }
        }
    });


    // asks for user credentials when accessing the canvas Stickfigure project
    const auth = function (req, res, next) {
        const creds = basicAuth(req);

        if (req.url.includes("canvasStickfigure")) {
            if (!creds || creds.name != "testUser" || creds.pass != "123!") {
                res.setHeader(
                    "WWW-Authenticate",
                    'Basic realm="Enter your credentials to see this stuff."'
                );
                res.sendStatus(401);
            } else {
                next();
            }
        } else {
            next();
        }
    };
    // I could also just create the above function without the outter if-statement and solely invoke it within the GET request for the Stickfigure project. 
    // Which ofc I'd then also need to create.
    app.use(auth);

    // this needs to be below my cookie-checker-function. Otherwise it wont include my static folder ...
    app.use("/express_portfolio", express.static(path.join(__dirname, "express_portfolio")));
    app.use("/Public", express.static(path.join(__dirname, "Public")));
    
    /////////////////////////////////////////////////////////////////////////////////////////////////
    

///////// for the static main page:
//   app.get("/route", (req, res) => {
 
//         res.sendFile(__dirname + "/route.html");

//   });


app.get("/route", (req, res) => {
    const projects = require("./projects.json");
    res.render("route", {
        title: "Main Page",
        headline: 'Here are some of my cool projects <br> @SpicedAcademy',
        projects,
    });
});


  app.get("/cookie", (req, res) => {
      res.sendFile(__dirname + "/cookieQuestion.html");
  });


  app.post("/cookie", (req, res) => {
      res.cookie("consent", true);
    // still need to redirect to the previous page
      if (req.cookies.lastURL) {
        res.redirect(req.cookies.lastURL);
      } else {
        res.redirect("/route");
      }
  });



app.listen(PORT, () =>
    console.log(`Express project running, listening on port:${PORT}`)
);