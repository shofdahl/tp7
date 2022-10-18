// JavaScript for TP6

// function to load a file name from the URL "fromFile" into the object identified by "whereTo" //
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}

  loadFileInto("Ingredients.html", "#ingredients ul");
  loadFileInto("equipment.html", "#equipment ul");
  loadFileInto("directions.html", "#directions ol");


window.onload = function() {
  
  document.querySelector("#titleBanner h1").classList.add("tp");
  
  document.querySelector("#titleBanner h1").onclick = function() {    
    this.classList.toggle("black");
  }
  
  document.querySelector("#recipeColumns #ingredients").onclick = function() {
    this.classList.toggle("tpShow")
  }
  
  document.querySelector("#recipeColumns #equipment").onclick = function() {
    this.classList.toggle("tpShow")
  }
  
  document.querySelector("#recipeColumns #directions").onclick = function() {
    this.classList.toggle("tpShow")
  }
  
  document.querySelector("#recipeColumns #directions ol").innerHTML += "<li>Give to your friends for a sweet surprise.</li>";


  
} //end window.onload