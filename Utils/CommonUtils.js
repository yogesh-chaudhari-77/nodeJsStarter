class CommonUtils {

    /**
     * Generates a temporory random id of given length
     * @param {*} length 
     */
    static getRandomId(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    /**
     * Makes the first letter of the word uppercase
     * @param str 
     */
    static ucFirst(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}

module.exports = CommonUtils;

