function setAlarm() {
  let alarmValue = parseInt(document.getElementById('alarmSet').value)
  changeOutputText(alarmValue)
}

function changeOutputText(time) {
  const outputText = document.getElementById('timeRemaining')
  outputText.innerText = 'Time Remaining: 00:' + (time < 10 ? `0${time}` : time)

  if (time > 0) {
    setTimeout(() => changeOutputText(--time), 1000)
  } else {
    playAlarm();
  }
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
