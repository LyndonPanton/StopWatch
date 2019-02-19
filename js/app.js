// Set the year dynamically
let date = document.getElementById("date");
let year = (new Date()).getFullYear();
date.textContent = year;

let sO = document.getElementById("secondsOnes");
let sT = document.getElementById("secondsTens");
let mO = document.getElementById("minutesOnes");
let mT = document.getElementById("minutesTens");
let hO = document.getElementById("hoursOnes");
let hT = document.getElementById("hoursTens");

let panels = document.getElementsByClassName("panel");

let tick = setInterval(startTimer, 1000);

function startTimer() {
	if (Number(sO.textContent) < 9) {
		sO.textContent = Number(sO.textContent) + 1;
	} else {
		sO.textContent = 0;

		if (Number(sT.textContent) < 5) {
			sT.textContent = Number(sT.textContent) + 1;
		} else {
			sT.textContent = 0;

			if (Number(mO.textContent) < 9) {
				mO.textContent = Number(mO.textContent) + 1;
			} else {
				mO.textContent = 0;

				if (Number(mT.textContent) < 5) {
					mT.textContent = Number(mT.textContent) + 1;
				} else {
					mT.textContent = 0;

					if (Number(hO.textContent) < 9) {
						hO.textContent = Number(hO.textContent) + 1;
					} else {
						hO.textContent = 0;

						if (Number(hT.textContent) < 9) {
							hT.textContent = Number(hT.textContent) + 1;
						} else {
							hT.textContent = 0;
							clearInterval(tick);

							for (let i = 0; i < panels.length; i++) {
								panels[i].style.color = "#FF0000";
							}
						}
					}
				}
			}
		}
	}
}