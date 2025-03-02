const yourClock = document.querySelector('#clock');

function updateClock() {
    yourClock.innerHTML = new Date().toLocaleTimeString();
}

// Initialize the clock immediately
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);

