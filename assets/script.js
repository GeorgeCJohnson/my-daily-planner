document.addEventListener("DOMContentLoaded", function() {
  // Display the current day at the top of the calendar
  const currentDayElement = document.getElementById("currentDay");
  const today = new Date();
  currentDayElement.textContent = today.toDateString();

  // Generate time blocks based on the criteria in the README.
  const container = document.getElementById("container");
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
    } else if (hour === currentTime) {
      timeBlock.classList.add("present");
    } else {
      timeBlock.classList.add("future");
    }

    // Create event input and save button
    const eventInput = document.createElement("input");
    eventInput.type = "text";
    eventInput.placeholder = "Enter event";
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";

    // Load saved events from local storage
    const savedEvent = localStorage.getItem(`event_${hour}`);
    if (savedEvent) {
      eventInput.value = savedEvent;
    }

    // Save event to local storage on button click
    saveButton.addEventListener("click", function() {
      localStorage.setItem(`event_${hour}`, eventInput.value);
    });

    // Add the elements to the time block
    timeBlock.appendChild(eventInput);
    timeBlock.appendChild(saveButton);

    // Add the time block to the container
    container.appendChild(timeBlock);
  }
});