let secondsCounter = 0, seconds = 0, minutes = 0, hours = 0, date, offset = 345;
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// Initializing all the required variables

function updateTimeAndMaybeDate() {
    date = new Date();
    secondsCounter = Math.floor(date.getTime() / 1000) - ((offset - 330) * 60);
    seconds = secondsCounter % 60;
    minutes = Math.floor(secondsCounter / 60) % 60;
    hours = Math.floor(secondsCounter / 3600) % 24;
    document.getElementById('time').textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    if (hours === 0 && minutes === 0 && seconds === 0) {
        updateDate();
    }
} // Updates the time and also updates the date at the right time

function updateDate() {
    date = new Date();
    document.getElementById('date').textContent = `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
} // Updates the date when called

updateDate();
updateTimeAndMaybeDate();
setInterval(updateTimeAndMaybeDate, 1000);
