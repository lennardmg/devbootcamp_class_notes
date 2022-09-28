const express = require("express");
const app = express();

const { getToken, getTweets, filterTweets } = require("./twitter");

app.use(express.static("./ticker"));



app.get("/headlines", (req, res) => {
    console.log("request the headlines!!!");


    // formatTweets: 
    //.flat()
    //.filter (tweet)
    // sortieren 


    // There will be 4 things we want to do here:
    // #1. get the token
    // #2. with the token, make a request for tweets
    // #3. once we receive the tweets, filter them
    // #4. send filtered tweets to the client as json

    getToken(function (error, bearerToken) {
        if (error) {
            console.log("Error in getToken: ", error);
            res.statusCode = 500;
            return;
        } 

        console.log(bearerToken);

        getTweets(bearerToken, (error, tweets) => {
            if (error) {
                console.log("Error in getTweets: ", error);
                res.statusCode = 500;
                return;
            }
            console.log(tweets);
            const filtered = filterTweets(tweets);
            res.json(filtered);
            console.log("filtered: ", filtered);
        });
    });
});

app.listen(8080, () => console.log("twitter api server listening.."));
