// FAQ Toggle Functionality
var faq = document.getElementsByClassName("faq-page");
for (let i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    var body = this.nextElementSibling;
    body.style.display = body.style.display === "block" ? "none" : "block";
  });
}
//snowflakes
function createSnow() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.animationDuration = Math.random() * 3 + 2 + "s"; // Snowfall duration
  snowflake.style.opacity = Math.random(); 
  snowflake.style.fontSize = Math.random() * 10 + 10 + "px"; // Random sizes
  snowflake.innerText = "❄"; //check if the snoflake is fine or i should try use an image?
  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

setInterval(createSnow, 200);
//musuic
const musicButton = document.getElementById("toggle-music");
const musicAudio = document.getElementById("christmas-music");

let isPlaying = false;

musicButton.addEventListener("click", () => {
  if (isPlaying) {
    musicAudio.pause();
    musicButton.textContent = "🎵"; // Change icon back
  } else {
    musicAudio.play();
    musicButton.textContent = "⏸️"; // Change icon to pause
  }
  isPlaying = !isPlaying;
});

//countdown
// Countdown Functionality
var targetDate = new Date("2025/1/1");
var days, hrs, min, sec;

window.onload = function () {
  timeToLaunch();
  numberTransition('#days .number', days, 1000, 'easeOutQuad');
  numberTransition('#hours .number', hrs, 1000, 'easeOutQuad');
  numberTransition('#minutes .number', min, 1000, 'easeOutQuad');
  numberTransition('#seconds .number', sec, 1000, 'easeOutQuad');
  setTimeout(countDownTimer, 1001);
};

function timeToLaunch() {
  var currentDate = new Date();
  var diff = Math.abs(Math.floor((currentDate - targetDate) / 1000));

  days = Math.floor(diff / (24 * 60 * 60));
  diff -= days * 24 * 60 * 60;

  hrs = Math.floor(diff / (60 * 60));
  diff -= hrs * 60 * 60;

  min = Math.floor(diff / 60);
  sec = diff % 60;
}

function countDownTimer() {
  timeToLaunch();
  document.getElementById("days").getElementsByClassName("number")[0].innerText = days;
  document.getElementById("hours").getElementsByClassName("number")[0].innerText = hrs;
  document.getElementById("minutes").getElementsByClassName("number")[0].innerText = min;
  document.getElementById("seconds").getElementsByClassName("number")[0].innerText = sec;
  setTimeout(countDownTimer, 1000);
}

function numberTransition(id, endPoint, transitionDuration, transitionEase) {
  var element = document.querySelector(id);
  var startValue = parseInt(element.textContent, 10);
  var startTime;

  function updateNumber(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var percentage = Math.min(progress / transitionDuration, 1);
    var currentValue = Math.floor(startValue + (endPoint - startValue) * percentage);
    element.textContent = currentValue;

    if (percentage < 1) {
      requestAnimationFrame(updateNumber);
    }
  }

  requestAnimationFrame(updateNumber);
}