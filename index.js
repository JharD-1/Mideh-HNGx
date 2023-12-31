// Get references to the elements using data-testid attributes
const currentDayElement = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const currentTimeElement = document.querySelector(
  '[data-testid="currentUTCTime"]'
);
  const now = new Date();


// Function to update the current day and time
const updateCurrentDayAndTime = function () {

  // setting Day
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday", 
  ];

  const currentDayOfWeek = daysOfWeek[now.getDay()];
  currentDayElement.textContent = currentDayOfWeek;

  //setting Time
  const utcTimeString = now.toLocaleTimeString("en-US");
  currentTimeElement.textContent = utcTimeString;
};
// Check if the current time is within +/- 10 seconds of UTC time
const checkAccuracy = function () {
  const utcTime = now.toLocaleTimeString("en-US");
  const marginInSeconds = 10;
  const allowableDeviation = marginInSeconds * 1000;

  if (Math.abs(now - utcTime) <= allowableDeviation) {
    updateCurrentDayAndTime();
  } else {
    currentTimeElement.textContent = "time-error";
  }
};
// Call the function to initially set the values
updateCurrentDayAndTime();

// Update the current day and time every second (1000 milliseconds)
setInterval(updateCurrentDayAndTime, 1000);
