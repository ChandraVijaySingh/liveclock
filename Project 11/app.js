
document.addEventListener("DOMContentLoaded", function () {
    const hourNeedle = document.querySelector(".needle.hour");
    const minNeedle = document.querySelector(".needle.min");
    const secNeedle = document.querySelector(".needle.sec");
    const timeDisplay = document.querySelector(".time");
    const dateDisplay = document.querySelector(".date");

    function updateClock() {
        const now = new Date();
        const hours = now.getHours() % 12 || 12; // Convert 24-hour format to 12-hour format
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const hourDeg = (hours + minutes / 60) * 360 / 12;
        const minDeg = (minutes + seconds / 60) * 360 / 60;
        const secDeg = seconds * 360 / 60;

        hourNeedle.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
        minNeedle.style.transform = `translate(-50%, -100%) rotate(${minDeg}deg)`;
        secNeedle.style.transform = `translate(-50%, -100%) rotate(${secDeg}deg)`;

        const formattedTime = `${hours}:${minutes.toString().padStart(2, "0")}`;
        const formattedDate = now.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });

        timeDisplay.textContent = formattedTime;
        dateDisplay.innerHTML = `${formattedDate} <span class="circle">${now.getDate()}</span>`;
    }

    setInterval(updateClock, 1000); // Update the clock every second

    const darkModeToggle = document.querySelector(".toggel");
    darkModeToggle.addEventListener("click", function () {
        document.documentElement.classList.toggle("dark");
    });
});
