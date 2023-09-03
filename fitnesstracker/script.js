const activityInput = document.getElementById("activityInput");
const caloriesInput = document.getElementById("caloriesInput");
const logBtn = document.getElementById("logBtn");
const activityList = document.getElementById("activityList");

logBtn.addEventListener("click", function() {
  const activity = activityInput.value.trim();
  const calories = parseInt(caloriesInput.value);

  if (activity !== "" && !isNaN(calories) && calories > 0) {
    const listItem = document.createElement("li");
    listItem.textContent = `${activity} - ${calories} calories burned`;
    activityList.appendChild(listItem);

    activityInput.value = "";
    caloriesInput.value = "";
  }
});
