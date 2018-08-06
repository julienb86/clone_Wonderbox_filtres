//variables: utilsation de Jquery

var $univers = $('#univers');
var $localisation = $("#localisation");

//fonction pour refermer après click sur le +
function close (identifiant){
	return $(identifiant).toggle(1000);
}


//creation de la fonction click sur le plus pour ouvrir le menu
$univers.on("click", function(){
//plus.addEventListener("click", function () {
	close("#formulaire");
	var form = document.createElement("form");
	form.id = "formulaire";
	form.style.display = "none";

	
	 //create a function that returns a section with the checkbox elements
    function element (nom){
		var zone = document.createElement("p");
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		var activite = document.createElement("label");
		form.appendChild(zone);
		univers.appendChild(form);
		zone.appendChild(checkbox);
		zone.appendChild(activite);
		activite.textContent = nom;
		return zone;
	}
 
	form.appendChild(element("beauté & bien-être"));
	form.appendChild(element("Loisirs & sorties"));
	form.appendChild(element("Restaurant & Gastronomie"));
	form.appendChild(element("Séjour & week-end"));
	form.appendChild(element("Sport & aventure"));
  
});

//localisation
	$localisation.on("click", function () {
		var loc = document.createElement("p");
		loc.id = "forms";
		loc.style.display = "none";
		var input = document.createElement("input");
		input.type = "text";
		input.placeholder = "Ville, code postal, pays...";
		input.style.padding = "10px";
		var loupe = document.createElement("i");
		loupe.classList.add = "fas fa-plus";
		close("#forms");

		localisation.appendChild(loc);
		loc.appendChild(input);
	
	
});


//A l'étranger
$(".etranger").on('click', function () {
	close("#liste-pays");
});



//participants
 $(".participants").on('click', function () {
 	close(".container");
 });