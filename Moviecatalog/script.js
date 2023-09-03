const movieInput = document.getElementById("movieInput");
const addMovieBtn = document.getElementById("addMovieBtn");
const movieList = document.getElementById("movieList");

addMovieBtn.addEventListener("click", function() {
  const movieTitle = movieInput.value.trim();
  if (movieTitle !== "") {
    const movieItem = document.createElement("li");
    movieItem.textContent = movieTitle;
    movieList.appendChild(movieItem);
    movieInput.value = "";
  }
});
