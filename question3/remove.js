var fs = require('fs');
const path = require('path');

if (!fs.existsSync('Logs')) {
    console.log("No logs folder found")
}

else {
    //delete files
    process.chdir(process.cwd() + '/Logs');
    for (let fileNum = 0; fileNum < 10; fileNum++) {
        fs.unlink(`log${fileNum}.txt`,
            (error) => {
                if (error) {
                    console.error("File does not exist")
                }
                else {
                    console.log(`delete files...log${fileNum}.txt`);
                }
            });
    }

    process.chdir('../');
    console.log(process.cwd());
    //delete the folder after moving out
    fs.rmdir(process.cwd()+'/Logs', () =>
    {
        console.log("Logs folder deleted")
    })

}


