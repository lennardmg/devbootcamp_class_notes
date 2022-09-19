const chalk = require('chalk');

////////////////////////////////////////////////// Exercise 1 / Part 1:

// const { log } = require('console');
const fs = require('fs');
const path = require('path');

let dirPath = path.join(__dirname, "files");
const dirContents = fs.readdirSync(dirPath);

// console.log(dirContents);
// is an array with the content

function logSizes (dirPath) {
    fs.readdir(dirPath, { withFileTypes: true }, (err, dirContents) => {
        
        if (err) {
            console.log("Couldn't read this directory's contents");
            console.log(err);
            return;
        }
        for (let item of dirContents) {
            if (item.isFile()) {

                let filePath = path.join(dirPath, item.name);
                let fileInfo = fs.statSync(filePath);
                
                console.log("📜", `${chalk.green(dirPath)}/${chalk.red(item.name)}: ${chalk.yellow(fileInfo.size)}`);

            } else if (item.isDirectory()) {
                console.log("📁", item.name);
                // console.log(dirPath);
                logSizes(path.join(dirPath, item.name));
            }
        }
    });
}

logSizes(dirPath);


////////////////////////////////////// Exercise 2 / Part 2:

function mapSizes (dirPath) {

   const dirObj = fs.readdirSync(dirPath, { withFileTypes: true });
   const newObj = {};

    for (const item of dirObj) {
            if (item.isFile()) {

                let filePath = path.join(dirPath, item.name);
                let fileInfo = fs.statSync(filePath);

                // console.log(item.name, fileInfo.size);
                newObj[item.name] = fileInfo.size;
            } else {

                // console.log(item.name, " is a folder");
                newObj[item.name] = mapSizes(path.join(dirPath, item.name));
            }

}
return newObj;

//    console.log(Array.isArray(dirObj));
//    return dirObj;
}
// console.log(mapSizes(dirPath));

mapSizes(dirPath);

const json = JSON.stringify(mapSizes(dirPath), null, 4);

fs.writeFileSync(`${__dirname}/files.json`, json);

// console.log(json);