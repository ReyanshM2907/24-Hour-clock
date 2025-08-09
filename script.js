let counter = 0, seconds = 0, seconds_ = "0", minutes = 0, minutes_ = "0", hours = 0, hours_ = "0", date;

function updateTime() {
    date = new Date();
    counter = Math.floor(date.getTime() / 1000) - (0.25*3600);
    seconds = counter % 60;
    minutes = Math.floor(counter / 60) % 60;
    hours = Math.floor(counter / 3600) % 24;
    {
        if (seconds <= 9) {
            seconds_ = "0" + seconds.toString();
        } else {
            seconds_ = seconds.toString();
        }
        if (minutes <= 9) {
            minutes_ = "0" + minutes.toString();
        } else {
            minutes_ = minutes.toString();
        }
        if (hours <= 9) {
            hours_ = "0" + hours.toString();
        } else {
            hours_ = hours.toString();
        }
    } // Pad the numbers with leading zeros if necessary 
    document.getElementById('time').textContent = `${hours_}:${minutes_}:${seconds_}`;
}

function updateDate() {
    date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let day_ = "";
    let month_ = "";
    {
        if (day === 0) {
            day_ = "Sunday";
        } else if (day === 1) {
            day_ = "Monday";
        } else if (day === 2) {
            day_ = "Tuesday";
        } else if (day === 3) {
            day_ = "Wednesday";
        } else if (day === 4) {
            day_ = "Thursday";
        } else if (day === 5) {
            day_ = "Friday";
        } else if (day === 6) {
            day_ = "Saturday";
        }
        if (month === 0) {
            month_ = "January";
        } else if (month === 1) {
            month_ = "February";
        } else if (month === 2) {
            month_ = "March";
        } else if (month === 3) {
            month_ = "April";
        } else if (month === 4) {
            month_ = "May";
        } else if (month === 5) {
            month_ = "June";
        } else if (month === 6) {
            month_ = "July";
        } else if (month === 7) {
            month_ = "August";
        } else if (month === 8) {
            month_ = "September";
        } else if (month === 9) {
            month_ = "October";
        } else if (month === 10) {
            month_ = "November";
        } else if (month === 11) {
            month_ = "December";
        }
    } // Convert to month and day names
    document.getElementById('date').textContent = `${day_}, ${month_} ${date.getDate()}, ${date.getFullYear()}`
}

updateDate();
updateTime();
setInterval(updateTime, 1000);
setInterval(updateDate, 1000);