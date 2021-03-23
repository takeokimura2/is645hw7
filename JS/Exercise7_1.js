// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

//populate the dropdown list based on the houses array

window.addEventListener("load",

  houses.forEach(house => {

    const houseElement = document.createElement("option");
    houseElement.value = house.code;
    houseElement.textContent = house.name;
    document.getElementById("house").appendChild(houseElement);

  }))

//create a list to display characters of the selected value

selectedList = document.createElement("ul");
selectedList.id = "characterListID";
document.getElementById("characters").appendChild(selectedList);

//obtain the target value from the user selection of the dropdown list and show characters

document.getElementById("house").addEventListener("change", house => {
  let houseCode;
  houseCode = house.target.value;
  characterList = getCharacters(houseCode);

  //remove the previously populated list from the paragraph for new output.
  document.getElementById("characters").removeChild(document.getElementById("characterListID"))
  selectedList = document.createElement("ul");
  selectedList.id = "characterListID";
  document.getElementById("characters").appendChild(selectedList);

  //loop the character list and append it to the list created above
  characterList.forEach(character => {
    characterID = document.createElement("li");
    characterID.textContent = character;
    document.getElementById("characterListID").appendChild(characterID);

  })
}
)


