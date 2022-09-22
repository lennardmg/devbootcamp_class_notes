const chalk = require("chalk");
const path = require("path");

 const express = require("express");
 const app = express();

 const PORT = 8080;

 const cookieParser = require("cookie-parser");
 
 //// the middleware functions:
 app.use(function logUrl(req, res, next) {
     console.log("---------------");
     console.log(`accessed at:\t${new Date(Date.now()).toString()}`);
     console.log(`req.method:\t${req.method}\nreq.url:\t${req.url}`);
     console.log("---------------");
     console.log("what's in my usercookie", req.cookies); //<--- CAREFUL reading cookies is req.cookies
     console.log("dirname: ", __dirname);
     next(); // <-- exit a middleware
    });
    
    
    
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

    // this needs to be below my cookie-checker-function. Otherwise it wont include my static folder ...
    app.use("/express_portfolio", express.static(path.join(__dirname, "express_portfolio")));
    
    
    /////////////////////////////////////////////////////////////////////////////////////////////////
    



  app.get("/mainPage", (req, res) => {
 
        res.sendFile(__dirname + "/mainPage.html");

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
        res.redirect("/mainPage");
      }
  });





app.listen(PORT, () =>
    console.log(`Express project running listening on port:${PORT}`)
);