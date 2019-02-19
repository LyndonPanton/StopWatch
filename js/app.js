// Set the year dynamically
let date = document.getElementById("date");
let year = (new Date()).getFullYear();
date.textContent = year;

setInterval(function() {
	let sO = document.getElementById("secondsOnes");
	let sT = document.getElementById("secondsTens");
	let mO = document.getElementById("minutesOnes");
	let mT = document.getElementById("minutesTens");
	let hO = document.getElementById("hoursOnes");
	let hT = document.getElementById("hoursTens");

	if (Number(sO.textContent) < 9) {
		sO.textContent = Number(sO.textContent) + 1;
	} else {
		sO.textContent = 0;

		if (Number(sT.textContent) < 5) {
			sT.textContent = Number(sT.textContent) + 1;
		} else {
			sT.textContent = 0;
		}
	}
}, 1000);