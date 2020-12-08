/**
 * Class implementing date related utility functions
 */
class CustDateUtils {

    /**
     * Returns Mon, Tue based on the date supplied
     * @param {*} dateString "2020-06-01 19:32:15"
     */
    static get_week_day(dateString) {

        var parsedDate = new Date(dateString);
        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

        var weekday = weekday[parsedDate.getDay()];
        return weekday;
    }

    /**
     * Returns Jan, Feb, Mar based on the date supplied 
     * @param {*} dateString "2020-06-01 19:32:15"
     */
    static get_month_name(dateString) {

        var parsedDate = new Date(dateString);
        var weekday = new Array(12);
        weekday[0] = "Jan";
        weekday[1] = "Feb";
        weekday[2] = "Mar";
        weekday[3] = "Apr";
        weekday[4] = "May";
        weekday[5] = "Jun";
        weekday[6] = "Jul";
        weekday[7] = "Aug";
        weekday[8] = "Sep";
        weekday[9] = "Oct";
        weekday[10] = "Nov";
        weekday[11] = "Dec";

        var month_name = weekday[parsedDate.getMonth()];

        return month_name;
    }


    // Give you the ralative date like 7 days ago
    static relative_time(previous) {

        var current = (new Date()).toISOString();
        current = new Date("" + current.replace("T", " ").substring(0, 19));
        previous = new Date(previous);

        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;

        var elapsed = current - previous;

        //	    if (elapsed < msPerMinute) {
        //	         return Math.round(elapsed/1000) + ' seconds ago';   
        //	    }

        if (elapsed < msPerMinute) {
            return 'Few moments ago';
        }
        else if (elapsed < msPerHour) {
            return Math.round(elapsed / msPerMinute) + ' minutes ago';
        }
        else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + ' hours ago';
        }
        else if (elapsed < msPerMonth) {
            return '' + Math.round(elapsed / msPerDay) + ' days ago';
        }
        else if (elapsed < msPerYear) {
            return '' + Math.round(elapsed / msPerMonth) + ' months ago';
        }
        else {
            return '' + Math.round(elapsed / msPerYear) + ' years ago';
        }
    }

    /**
     * Adds certains days to start date and returns new end date
     * @param {} start_date 
     * @param {*} number_of_days - int - number of days to be added
     * @returns formatted_end_date = yyyy-mm-dd
     */
    date_plus_days(start_date, number_of_days) {

        var date = new Date(start_date);
        var end_date = new Date(date);

        end_date.setDate(end_date.getDate() + number_of_days);

        // We want date and month in 2 digit format.
        var dd = ("0" + end_date.getDate()).slice(-2);
        var mm = ("0" + (end_date.getMonth() + 1)).slice(-2);
        var yyyy = end_date.getFullYear();

        //We want date in formatted as yyyy-mm--dd so constructing that.
        var formatted_end_date = yyyy + '-' + mm + '-' + dd;

        return formatted_end_date;
    }

    /**
     * Returns current date in dd-mm-yyyy or yyyy-mm-dd format
     * @param {*} format 
     */
    get_current_date(format) {
        var currentDate = new Date();

        var dd = ("0" + currentDate.getDate()).slice(-2);
        var mm = ("0" + (currentDate.getMonth() + 1)).slice(-2);
        var yyyy = currentDate.getFullYear();

        if (format == "dd-mm-yyyy")
            return dd + "-" + mm + "-" + yyyy;
        else if (format == "yyyy-mm-dd")
            return yyyy + "-" + mm + "-" + dd;
    }


    /**
     * Returns current time HH:MM AM/PM 
     */
    get_current_time_AMPM() {
        var currentTime = new Date(),
            hours = currentTime.getHours(),
            minutes = currentTime.getMinutes();

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        var suffix = "AM";
        if (hours >= 12) {
            suffix = "PM";
            hours = hours - 12;
        }
        if (hours == 0) {
            hours = 12;
        }

        return hours + ":" + minutes + " " + suffix;
    }
}

module.exports = CustDateUtils;