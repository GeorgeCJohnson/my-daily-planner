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
    timeBlock.classList.add("row", "time-block");

    // Add the "past", "present", or "future" class based on the current time
    const currentTime = new Date().getHours();
    if (hour < currentTime) {
      timeBlock.classList.add("past");
    } else if (hour === currentTime) {
      timeBlock.classList.add("present");
    } else {
      timeBlock.classList.add("future");
    }

    // Add an ID to uniquely identify each time block.
    timeBlock.setAttribute("id", `hour-${hour}`);

    // Hour label.
    const hourLabel = document.createElement("div");
    hourLabel.classList.add("col-2", "col-md-1", "hour", "text-center", "py-3");
    hourLabel.textContent = hour > 12 ? `${hour - 12}PM` : `${hour}AM`;

    // Textarea for event input
    const eventInput = document.createElement("textarea");
    eventInput.classList.add("col-8", "col-md-10", "description");
    eventInput.rows = "3";
    eventInput.placeholder = "Enter event";

    // Load saved events from local storage
    const savedEvent = localStorage.getItem(`event_${hour}`);
    if (savedEvent) {
      eventInput.value = savedEvent;
    }

    // Save button
    const saveButton = document.createElement("button");
    saveButton.classList.add("btn", "saveBtn", "col-2", "col-md-1");
    saveButton.setAttribute("aria-label", "save");
    const saveIcon = document.createElement("i");
    saveIcon.classList.add("fas", "fa-save");
    saveIcon.setAttribute("aria-hidden", "true");
    saveButton.appendChild(saveIcon);

    // Save event to local storage on button click
    saveButton.addEventListener("click", function() {
      localStorage.setItem(`event_${hour}`, eventInput.value);
    });

    // Add elements to the time block
    timeBlock.appendChild(hourLabel);
    timeBlock.appendChild(eventInput);
    timeBlock.appendChild(saveButton);

    // Add the time block to the container
    container.appendChild(timeBlock);
  }
});