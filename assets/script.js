document.addEventListener("DOMContentLoaded", function() {
    // Display the current day at the top of the calendar
    const currentDayElement = document.getElementById("currentDay");
    const today = new Date();
    currentDayElement.textContent = today.toDateString();

// Generate time blocks for standard business hours
const container = document.querySelector(".container");
const businessHours = {
    start: 9,
    end: 17
};

for (let hour = businessHours.start; hour <= businessHours.end; hour++) {
    const timeBlock = document.createElement("div");
    timeBlock.classList.add("time-block");
    timeBlock.textContent = `${hour}:00`;

// Color-code the time blocks based on past, present, or future
    const currentTime = new Date().getHours();
    if (hour < currentTime) {
        timeBlock.classList.add("past");
        } 
        
        else if (hour === currentTime) {
          timeBlock.classList.add("present");
        } 
        
        else {
          timeBlock.classList.add("future");
        }
// Create event input and save button
const eventInput = document.createElement("input");
eventInput.type = "text";
eventInput.placeholder = "Enter event";
const saveButton = document.createElement("button");
saveButton.textContent = "Save";