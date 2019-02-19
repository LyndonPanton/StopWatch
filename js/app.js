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

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let recordBtn = document.getElementById("record");
let resetBtn = document.getElementById("reset");

let records = document.getElementById("records");

let panels = document.getElementsByClassName("panel");
let buttons = document.getElementsByClassName("button");

let tick;

startBtn.addEventListener("click", function() {
	tick = setInterval(startTimer, 1000);
});

stopBtn.addEventListener("click", function() {
	clearInterval(tick);
});

recordBtn.addEventListener("click", function() {
	let recording = document.createElement("span");
	recording.className = "recording";
	recording.textContent = `${records.children.length + 1}. ${hT.textContent}${hO.textContent}:${mT.textContent}${mO.textContent}:${sT.textContent}${sO.textContent}`;

	records.appendChild(recording);
});

resetBtn.addEventListener("click", function() {
	clearInterval(tick);

	sO.textContent = 0;
	sT.textContent = 0;
	mO.textContent = 0;
	mT.textContent = 0;
	hO.textContent = 0;
	hT.textContent = 0;
});

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