var fs = require('fs');
const path = require('path');

if (!fs.existsSync('Logs')) {
fs.mkdir(path.join('Logs'),{ recursive: true },
    (error) => {
        if (error) {
            return console.error(error);
        }
        else {
            console.log('Directory created');
        }
    });
}

console.log(process.cwd());

process.chdir(process.cwd() + '/Logs');
console.log(process.cwd());


for (let fileNum = 0; fileNum < 10; fileNum++) {
    fs.appendFile(`log${fileNum}.txt`, `log${fileNum}`,
        (error) => {
            if (error) {
                return console.error(error)
            }
            console.log(`log${fileNum}.txt`);

        });

}