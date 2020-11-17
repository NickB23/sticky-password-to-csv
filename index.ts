function main() {
    // Make sure we got a filename on the command line.
    if (process.argv.length < 3) {
      console.log('Usage: node ' + process.argv[1] + ' FILENAME');
      process.exit(1);
    }
    // Read the file and create a readStream and writeStream
    const fs = require('fs'), filename = process.argv[2];
    const split2 = require('split2');


    const readStream = fs.createReadStream(filename);
    const writeStream = fs.createWriteStream("./passwords.csv");

    writeStream.write("name;url;username;password;;;");

    let lastName = "";
    let lastLink = "";

    readStream
        .pipe(split2())
        .on('data', (line) => {
            const originalLine = line.toString();
            let newLine = "";

            const accountName = "Account name: "
            const link = "Link: "
            const login = "Login: "
            const password = "Password: "

            if (originalLine.includes(accountName)) {
              const justName = originalLine.split(accountName).pop();
              lastName = `\n"${justName}";`
            }
            if (originalLine.includes(link)) {
              const justValue = originalLine.split(link).pop();
              lastLink = `"${justValue}";`
            }
            if (originalLine.includes(login)) {
              const justValue = originalLine.split(login).pop();
              newLine = `${lastName}${lastLink}"${justValue}";`
            }
            if (originalLine.includes(password)) {
              const justValue = originalLine.split(password).pop();
              newLine = `"${justValue}";`
            }
            if (originalLine === "\n") {
                newLine = ";;;"
            }

            writeStream.write(newLine);
        })
        .on('end', () => writeStream.close())
}

main();