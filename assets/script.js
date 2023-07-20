document.addEventListener("DOMContentLoaded", function() {
    // Display the current day at the top of the calendar
    const currentDayElement = document.getElementById("currentDay");
    const today = new Date();
    currentDayElement.textContent = today.toDateString();