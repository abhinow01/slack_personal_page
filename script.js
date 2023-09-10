document.addEventListener("DOMContentLoaded", function () {
    // Get the elements by data-testid attributes
    const slackUserNameElement = document.querySelector('[data-testid="slackUserName"]');
    const currentDayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    // Set the Slack username
    slackUserNameElement.textContent = "ABHINAV KHANNA ";

    // Get the current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    currentDayOfTheWeekElement.textContent = currentDayOfWeek;

    // Get the current UTC time in milliseconds
    function updateTime(){
    const currentUTCTime = currentDate.getTime();
    currentUTCTimeElement.textContent = currentUTCTime;
    }

    
    // updateTime();
    setTimeout(updateTime,1);
});
