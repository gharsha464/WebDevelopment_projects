const dice = document.getElementById("dice");
const rollBtn = document.getElementById("rollBtn");
const faces = dice.querySelectorAll(".face");

function rollDice() {
  faces.forEach(face => face.classList.remove("active"));

  const randomFaceIndex = Math.floor(Math.random() * 6);
  faces[randomFaceIndex].classList.add("active");
}

rollBtn.addEventListener("click", rollDice);
