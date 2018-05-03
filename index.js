// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $searchBtn = document.querySelector("#searchBtn");
var $date_TimeInput = document.querySelector("#date_time");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener('click', handleSearchButtonClick)

// Set ufoSightings to dataData initially
var ufoSightings = dataSet;

// renderTable renders the ufoSightings to the tbody
function renderTable () {
	$tbody.innerHTML = "";
	for (var i = 0; i < ufoSightings.length; i++) {
		// Get get the ufo data object and its fields
		var ufoData = ufoSightings[i];
		var fields = Object.keys(ufoData);
		// Create a new row in the tbody, set the index to be i + startingIndex
		var row = $tbody.insertRow(i);
		for (var j=0; j < fields.length; j++){
			var dataCell = row.insertCell(j);
			dataCell.innerHTML = ufoData[fields[j]];
		}
	}
}
function handleSearchButtonClick(event){
	event.preventDefault()
 	// Format the user's search by removing leading and trailing whitespace, lowercase the string
	var filterCity = $cityInput.value.trim().toLowerCase();
	var filterState = $stateInput.value.trim().toLowerCase();
	var filterCountry = $countryInput.value.trim().toLowerCase();
	var filterShape = $shapeInput.value.trim().toLowerCase();
	ufoSightings = dataSet.filter(function(ufoData){
		var ufoDataCity = ufoData.city.substring(0, filterCity.length).toLowerCase();
		var ufoDataState = ufoData.state.substring(0, filterState.length).toLowerCase();
		var ufoDataCountry = ufoData.country.substring(0, filterCountry.length).toLowerCase();
		var ufoDataShape = ufoData.shape.substring(0, filterShape.length);
		if (ufoDataCity === filterCity && ufoDataState === filterState && ufoDataCountry === filterCountry && ufoDataShape == filterShape){
			return true;
		}
		return false	
	});
	renderTable()
}

// Render the table for the first time on page load
renderTable();