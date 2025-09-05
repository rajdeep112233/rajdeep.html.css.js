// Function to update the clock every second
function updateClock() {
    const now = new Date();

    // --- Time ---
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // if 0 then 12

    // Add leading zeros
    const hoursStr = hours.toString().padStart(2, '0');
    const minutesStr = minutes.toString().padStart(2, '0');
    const secondsStr = seconds.toString().padStart(2, '0');

    // --- Date ---
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = now.toLocaleDateString('en-US', options);

    // Update the HTML
    document.getElementById('hours').textContent = hoursStr;
    document.getElementById('minutes').textContent = minutesStr;
    document.getElementById('seconds').textContent = secondsStr;
    document.getElementById('ampm').textContent = ampm;
    document.getElementById('date').textContent = dateStr;

    // Blinking colon
    document.getElementById('colon').style.visibility = seconds % 2 === 0 ? 'visible' : 'hidden';
}

// Run immediately and every second
updateClock();
setInterval(updateClock, 1000);
