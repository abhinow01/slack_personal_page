document.addEventListener("DOMContentLoaded", function () {
    
    const slackUserNameElement = document.querySelector('[data-testid="slackUserName"]');
    const currentDayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    
    slackUserNameElement.textContent = "ABHINAV KHANNA ";

    
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    currentDayOfTheWeekElement.textContent = currentDayOfWeek;

    
    function updateTime(){
    const currentUTCTime = currentDate.getTime();
    currentUTCTimeElement.textContent = currentUTCTime;
    }

    
    updateTime();
    setTimeout(updateTime,1);
});
