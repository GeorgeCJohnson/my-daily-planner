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