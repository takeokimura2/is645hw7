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

const userInput = document.getElementById("country");

const countrySuggestion = document.getElementById("suggestions");

userInput.addEventListener("input", e => {
  input = e.target.value;
  resultsList = [];

  if (input.length) {
    resultsList = countryList.filter(country => {
      return country.toLowerCase().includes(input.toLowerCase())
    });
  }

  function renderResults(resultsList)
})