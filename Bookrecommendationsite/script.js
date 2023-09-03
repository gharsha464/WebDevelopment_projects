document.addEventListener("DOMContentLoaded", () => {
    const genreSelect = document.getElementById("genreSelect");
    const bookList = document.getElementById("bookList");

    // Sample book data (replace with your own)
    const booksByGenre = {
        fantasy: [
            { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling" },
            { title: "The Hobbit", author: "J.R.R. Tolkien" },
        ],
        mystery: [
            { title: "Sherlock Holmes: The Hound of the Baskervilles", author: "Arthur Conan Doyle" },
            { title: "Gone Girl", author: "Gillian Flynn" },
        ],
        romance: [
            { title: "Pride and Prejudice", author: "Jane Austen" },
            { title: "The Notebook", author: "Nicholas Sparks" },
        ],
        "sci-fi": [
            { title: "Dune", author: "Frank Herbert" },
            { title: "The Hunger Games", author: "Suzanne Collins" },
        ],
    };

    // Function to display books in a list
    function displayBooks(books) {
        bookList.innerHTML = "";
        books.forEach((book) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${book.title}</strong> by ${book.author}`;
            bookList.appendChild(listItem);
        });
    }

    // Event listener for genre selection
    genreSelect.addEventListener("change", () => {
        const selectedGenre = genreSelect.value;
        const selectedBooks = booksByGenre[selectedGenre] || [];
        displayBooks(selectedBooks);
    });

    // Display books initially based on the default selected genre
    const initialGenre = genreSelect.value;
    const initialBooks = booksByGenre[initialGenre] || [];
    displayBooks(initialBooks);
});
