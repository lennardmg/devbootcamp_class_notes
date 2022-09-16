const chalk = require('chalk');
const { log } = require('console');
// console.log(chalk.yellow('Hello world!'));

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



const story = {
    q: "Welcome to The Land Of Wizards! Would you like to play?",
    answers: {
        yes: {
            q: "You are alone in a dark forest and facing a fork in the road. Which direction do you turn?",
            answers: {
                left: {
                    q: "There's a scary wizard! He asks you a tough question. What's 1+1?",
                    answers: {
                        "2": "congratulations!"
                    }
                },
                right: "This was not the right choice. Goodbye!"
            }
        },
        no: "Alright then. Enjoy your day!"
    }
};

let currentQuestion = story.q;
let currentAnswers = story.answers;

function askQuestion(question, answers) {

    rl.question(question + chalk.yellow(`[${Object.keys(currentAnswers)}]`), (userInput) => {

        
        
        if (!Object.keys(currentAnswers).includes(userInput)) {
            
            // console.log(Object.keys(currentAnswers));
            // console.log(typeof Object.keys(currentAnswers));
            console.log(chalk.bgGreen("Can't you read or what? Choose one of the answers!"));
            askQuestion(currentQuestion, currentAnswers);
            
        } else {
            
            currentQuestion = answers[userInput].q;
            currentAnswers = answers[userInput].answers;

            if (typeof currentAnswers === "undefined") {
                    console.log(chalk.bgRed('The Game has finished'));
                    rl.close();
                    return;
                }
            // console.log("currentQuestion after reasignment: ", currentQuestion);
            // console.log("currentAnswer after reasignment: ", currentAnswers);
            // console.log("typeof: ", typeof currentAnswers);
            // console.log("typeof: ", typeof currentQuestion);

        askQuestion(currentQuestion, currentAnswers);
        }
       
    });
};

askQuestion(currentQuestion, currentAnswers);