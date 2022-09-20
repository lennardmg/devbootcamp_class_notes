const chalk = require("chalk");

const http = require("http");

const querystring = require("querystring");

const PORT = 8081;




const server = http.createServer((request, response)=>{

    response.on("error", (error) => console.log("Error in response: ", error));
    request.on("error", (error) => console.log("Error in request: ", error));

    if (request.method === "GET") {
        response.write(`
        <!doctype html>
<html>
<title>Colors</title>
<form method="POST">
  <input type="text" name="text">
  <select name="color">
    <option value="red">red</option>
    <option value="blue">blue</option>
    <option value="green">green</option>
    <option value="yellow">yellow</option>
    <option value="gray">gray</option>
    <option value="magenta">magenta</option>
    <option value="cyan">cyan</option>
  </select>
  <button type="submit">Go</button>
</form>
</html>
        `)
        response.end();

    } else if (request.method === "POST") {

        let body = "";
        
        request.on("data", (chunk) => {
            body += chunk;
        });
        request.on("end", ()=> {

            const parsedBody = querystring.parse(body);
            const chosenColor = parsedBody.color
            
            // console.log("body: ", body);
            // console.log("parsed body: ", querystring.parse(body));
            // console.log(parsedBody.color);
            // console.log(typeof parsedBody.color);
            // console.log(chosenColor);
            
            // here needs to be dealt with whats gonna be shown
            // need to access a property of an object dinamically, object[color], gonna need the square brackets

            response.write(`
            <!doctype html>
            <html>
            <title> ${chalk[chosenColor](parsedBody.text)} </title>
            <h1> <a href="/" style="color:${chosenColor}"> ${parsedBody.text} </a> </h1>
                </html>
                `);

// i need to put the chosenColor in square brackets when using chalk, because otherwise it doesnt detect that it's a changeable value
// but instead looks for a property in the chalk function with the name "chosenColor".

            console.log(`Here comes the user input in ${chosenColor}: `, chalk[chosenColor](parsedBody.text));
            response.end();
        });
    }
});

server.listen(PORT, console.log(chalk.red(`listening on Port ${PORT}`)));
