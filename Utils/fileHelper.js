/**
 * File Operation handling helper class
 * Operations - Read file, Write File
 * Asynchronous operations are not handled in this class
 * 
 * Basic Usage
 * const fileHelper = new FileHelper();
 * const retData = fileHelper.readFileSync(__dirname+"/data/dummyFile.txt");
 * fileHelper.readFileAsync(__dirname+"/data/dummyFile.txt");
 * fileHelper.writeFileSync(__dirname+"/data/dummyWriteFile.txt", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
 */
const fs = require('fs');

class FileHelper {

    constructor() {

    }
    /**
     * Reads the data asynchronously and returns the read data at once
     * @param {} location : String, location of the file to read.
     */

    readFileSync(location) {
        const data = fs.readFileSync(location, { encoding: 'utf8' });
        return data;
    }


    /**
     * Non-blocking reading the file
     * Seems like it can not be used as, there is no way to return this partially read data
     * @param {*} location - location of the file to read
     */
    readFileAsync(location) {
        fs.readFile(location, { encoding: 'utf8' }, (err, data) => {
            if (err) {
                console.error(err);
            }

            console.log(data);

        } // End of callback()
        ); //End of readFile()
    }


    writeFileSync(location, data) {
        fs.writeFileSync(location, data, { encoding: 'utf8' });
    }

    // const retData = readFileSync(__dirname+"/data/dummyFile.txt");
    // console.log(retData);

    //readFileAsync(__dirname+"/data/dummyFile.txt");

    // writeFileSync(__dirname+"/data/dummyWriteFile.txt", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

}

module.exports = FileHelper;