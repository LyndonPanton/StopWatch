// Set the year dynamically
let date = document.getElementById("date");
let year = (new Date()).getFullYear();
date.textContent = year;

// Select individual panels
let sO = document.getElementById("secondsOnes");
let sT = document.getElementById("secondsTens");
let mO = document.getElementById("minutesOnes");
let mT = document.getElementById("minutesTens");
let hO = document.getElementById("hoursOnes");
let hT = document.getElementById("hoursTens");
let msT = document.getElementById("millisecondsTens");
let msH = document.getElementById("millisecondsHundreds");

// Select individual button elements
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let recordBtn = document.getElementById("record");
let resetBtn = document.getElementById("reset");
let clearBtn = document.getElementById("clear");

// Select recordings element
let records = document.getElementById("records");

// Select panel elements
let panels = document.getElementsByClassName("panel");
let buttons = document.getElementsByClassName("button");

// For recording time
let tick;

// When the start button is clicked...
startBtn.addEventListener("click", function() {
	// Start the timer if it hasn't already been started
	if (!tick) {
		tick = setInterval(startTimer, 10);
	}
});

// When the stop button is clicked...
stopBtn.addEventListener("click", function() {
	// Stop the timer
	clearInterval(tick);
	tick = false;
});

// When the record button is clicked...
recordBtn.addEventListener("click", function() {
	// Create a span elements
	let ms = document.createElement("span");
	let s = document.createElement("span");
	let m = document.createElement("span");
	let h = document.createElement("span");
	let recording = document.createElement("span");

	// Give them classes
	ms.className = "milliseconds";
	s.className = "seconds";
	m.className = "minutes"
	h.className = "hours";
	recording.className = "recording";

	// Give them content
	ms.textContent = `${msH.textContent}${msT.textContent}`;
	s.textContent = `${sT.textContent}${sO.textContent}:`;
	m.textContent = `${mT.textContent}${mO.textContent}:`;
	h.textContent = `${hT.textContent}${hO.textContent}:`;
	recording.textContent = `${records.children.length + 1}. `;

	// Add times to the recording
	recording.appendChild(h);
	recording.appendChild(m);
	recording.appendChild(s);
	recording.appendChild(ms);

	// Add recordings element to the records section
	records.appendChild(recording);
});

// When the reset button is clicked...
resetBtn.addEventListener("click", function() {
	// Stop the timer
	clearInterval(tick);

	// Reset the timer
	sO.textContent = 0;
	sT.textContent = 0;
	mO.textContent = 0;
	mT.textContent = 0;
	hO.textContent = 0;
	hT.textContent = 0;
	msH.textContent = 0;
	msT.textContent = 0;

	tick = false;
});

// When the clear button is clicked...
clearBtn.addEventListener("click", function() {
	document.getElementById("records").textContent = "";
});

// Timer logic
function startTimer() {
	if (Number(msT.textContent) < 9) {
		msT.textContent = Number(msT.textContent) + 1;
	} else {
		msT.textContent = 0;

		if (Number(msH.textContent) < 9) {
			msH.textContent = Number(msH.textContent) + 1;
		} else {
			msH.textContent = 0;

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
	}
}
