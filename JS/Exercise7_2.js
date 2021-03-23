// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];




//create a list to diplay the suggested list
countrySuggestions = document.createElement("ul");
countrySuggestions.id = "countrysuggestions"
document.getElementById("suggestions").appendChild(countrySuggestions);


//create a list of suggested country based on user input
document.getElementById("country").addEventListener("input", (e) => {

  let countryArray = [];
  let userInput = e.target.value;

  if (e.target.value) {
    countryArray = countryList.filter(country => country.toLowerCase().includes(userInput.toLowerCase()));
    countryArray = countryArray.map(country => `<li>${country}<li>`)
  }

  showCountryArray(countryArray);

})

function showCountryArray(countryArray) {
  const html = !countryArray.length ? "" : countryArray.join("");
  document.querySelector("ul").innerHTML = html;
}