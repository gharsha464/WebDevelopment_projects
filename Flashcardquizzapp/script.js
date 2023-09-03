const showAnswerBtn = document.getElementById("show-answer");
const nextCardBtn = document.getElementById("next-card");
const answer = document.querySelector(".answer");

showAnswerBtn.addEventListener("click", () => {
    answer.style.display = "block";
});

nextCardBtn.addEventListener("click", () => {
    answer.style.display = "none";
});
