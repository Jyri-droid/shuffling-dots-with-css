let colors = ["lightsalmon", "lightseagreen", "lightskyblue", "lightgoldenrodyellow", "lightgrey", "lightpink"];
let subContainers = [];
let dots = [];

// Create dots
for (i = 0; i < colors.length; i++) {
	// Create a subcontainer for each dot
	subContainers[i] = document.createElement("div");
	subContainers[i].style.border = "4px solid black";
	subContainers[i].style.paddingLeft = countPadding(colors, i);
	document.getElementById("container").appendChild(subContainers[i]);
	// Create dots inside their containers
	dots[i] = document.createElement("div");
	dots[i].classList.add("dot");
	dots[i].style.backgroundColor = colors[i];
	subContainers[i].appendChild(dots[i]);
}

function shuffleDots() {
	// Shuffle order in random
	for (j = 0; j < subContainers.length; j++) {
		let randomSwitch = Math.floor(Math.random() * (subContainers.length - j)) + j;
		[[subContainers[j]],subContainers[randomSwitch]] = [[subContainers[randomSwitch]],subContainers[j]];
	}
	// Reposition dots
	for (k = 0; k < subContainers.length; k++) {
		subContainers[k].style.paddingLeft = countPadding(colors, k);
	}
}

// Count left padding for subcontainers
function countPadding(array, positionInArray) {
	let step = 100 / array.length;
	return positionInArray * step + (step / 2) + "%";
}

function layerVisibility() {
	let button = document.getElementById("buttonLayer");
	if (subContainers[0].style.borderColor !== "transparent") {
		button.innerHTML = "Show layers";
		for (l of subContainers) {
			l.style.borderColor = "transparent";
			l.style.marginTop = "0";
		}
	} else {
		let distance = 0;
		button.innerHTML = "Hide layers";
		for (l of subContainers) {
			l.style.borderColor = l.firstChild.style.backgroundColor;
			l.style.marginTop = distance + "px";
			distance = distance + subContainers[0].offsetHeight;
		}
	}
}