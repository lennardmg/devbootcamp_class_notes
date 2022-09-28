const { get } = require("http");
const https = require("https");
const { twitterKey, twitterSecret } = require("./twitterCredentials");

const authorization = `Basic ${Buffer.from(
    twitterKey + ":" + twitterSecret
).toString("base64")}`;


// 
module.exports.getToken = function (callback) {
    const options = {
        host: "api.twitter.com",
        path: "/oauth2/token",
        method: "POST",
        headers: {
            authorization,
            // copy this from documentation!!! show them how the req should look like
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };

        // 
    const callbackToken = (res) => {
        if (res.statusCode != 200) {
            callback(new Error(res.statusCode));
            return;
        } else {
            let body = "";
            res.on("data", (chunk) => {
                body += chunk;
            });
            res.on("end", () => {
                let parsedBody = JSON.parse(body);
                callback(null, parsedBody.access_token);
            });
        }
    };

    const req = https.request(options, callbackToken);

    req.end("grant_type=client_credentials");
};



module.exports.getTweets = function (token, callback) {
    const twitterOptions = {
        screen_name: "nytimes",
        tweet_mode: "extended",
        count: 3,
    };
    // convert the object to a string
    console.log("twitterOptions in getTweets: ", twitterOptions);
    
    const options = {
        method: "GET",
        host: "api.twitter.com",
        // path: `/1.1/statuses/user_timeline.json?screen_name=${twitterOptions.screen_name}&tweet_mode=${twitterOptions.tweet_mode}&count=${twitterOptions.count}`,
        path: "/1.1/statuses/user_timeline.json?screen_name=nytimes&count=3",
        headers: {
            authorization: "Bearer " + token,
        },
    }; 
    // console.log("komischer string:", options.path);



    const callbackTweets = (res) => {
        if (res.statusCode != 200) {
            callback(new Error(res.statusCode));
            return;
        } else {
            let body = "";
            res.on("data", (chunk) => {
                body += chunk;
            });
            res.on("end", () => {
                // console.log("body in callbackTweets: ", body);
                callback(null, JSON.parse(body))
            });
        }
    };

    const req = https.request(options, callbackTweets);

    req.end();

};
// request an die twitter API

module.exports.filterTweets = function () {};
