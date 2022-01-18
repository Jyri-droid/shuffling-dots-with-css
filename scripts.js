const colors = ["khaki", "lightpink", "powderblue", "gold", "plum", "lightsalmon"];
const photoUrls = ["https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2799&q=80", "https://images.unsplash.com/photo-1584361853901-dd1904bb7987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80", "https://images.unsplash.com/photo-1444069069008-83a57aac43ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80", "https://images.unsplash.com/photo-1504275490777-45f30792f13f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80", "https://images.unsplash.com/photo-1590038767624-dac5740a997b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80", "https://images.unsplash.com/photo-1550253652-63e069f9d0fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2592&q=80"];
const dotContainers = [];
const dots = [];


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
	dots[i].style.backgroundImage = "url('" + photoUrls[i] + "')";
	dots[i].style.backgroundSize = "cover";
	dots[i].style.backgroundBlendMode = "multiply";
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