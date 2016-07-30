var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var hohohoElement = document.getElementById("coloredReindeer");

for (var i = 0; i < reindeer.length; i++) {
	var nameOfReindeer = colors[i] + " " + reindeer[i];
	console.log(nameOfReindeer);
	var liReindeer = document.createElement("li");
	liReindeer.innerHTML = nameOfReindeer;
	hohohoElement.appendChild(liReindeer);
}
