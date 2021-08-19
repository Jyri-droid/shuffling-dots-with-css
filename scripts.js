let colors = ["lightsalmon", "lightseagreen", "lightskyblue", "lightgoldenrodyellow", "lightgrey", "lightpink"];
let dotContainers = [];
let dots = [];

// Create dots
for (i = 0; i < colors.length; i++) {
	// Create a subcontainer for each dot
	dotContainers[i] = document.createElement("div");
	dotContainers[i].style.border = "4px solid transparent";
	dotContainers[i].style.paddingLeft = countPadding(colors, i);
	document.getElementById("container").appendChild(dotContainers[i]);
	// Create dots inside their containers
	dots[i] = document.createElement("div");
	dots[i].classList.add("dot");
	dots[i].style.backgroundColor = colors[i];
	dotContainers[i].appendChild(dots[i]);
}

function shuffleDots() {
	// Shuffle order in random
	for (j = 0; j < dotContainers.length; j++) {
		let randomSwitch = Math.floor(Math.random() * (dotContainers.length - j)) + j;
		[[dotContainers[j]],dotContainers[randomSwitch]] = [[dotContainers[randomSwitch]],dotContainers[j]];
	}
	// Reposition dots
	for (k = 0; k < dotContainers.length; k++) {
		dotContainers[k].style.paddingLeft = countPadding(colors, k);
	}
}

// Count left padding for dotContainers
function countPadding(array, positionInArray) {
	let step = 100 / array.length;
	return positionInArray * step + (step / 2) + "%";
}

// Show or hide dot container divs
function layerVisibility() {
	let button = document.getElementById("buttonLayer");
	if (dotContainers[0].style.borderColor !== "transparent") {
		button.innerHTML = "Show layers";
		for (l of dotContainers) {
			l.style.borderColor = "transparent";
			l.style.marginTop = "0";
		}
	} else {
		let distance = 0;
		button.innerHTML = "Hide layers";
		for (l of dotContainers) {
			l.style.borderColor = l.firstChild.style.backgroundColor;
			l.style.marginTop = distance + "px";
			distance = distance + dotContainers[0].offsetHeight;
		}
	}
}