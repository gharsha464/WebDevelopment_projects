const destinationInput = document.getElementById("destinationInput");
const dateInput = document.getElementById("dateInput");
const addBtn = document.getElementById("addBtn");
const itineraryList = document.getElementById("itineraryList");

addBtn.addEventListener("click", function() {
  const destination = destinationInput.value.trim();
  const date = dateInput.value;

  if (destination !== "" && date !== "") {
    const itineraryItem = document.createElement("li");
    itineraryItem.textContent = `${destination} - ${date}`;
    itineraryList.appendChild(itineraryItem);

    destinationInput.value = "";
    dateInput.value = "";
  }
});
