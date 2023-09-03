const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const noteList = document.getElementById("noteList");

// Function to create a note item
function createNoteItem(text) {
  const noteItem = document.createElement("li");
  noteItem.className = "note-item";
  noteItem.innerHTML = `
    <span class="note-text">${text}</span>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;
  noteList.appendChild(noteItem);

  // Add event listener for edit button
  const editBtn = noteItem.querySelector(".edit-btn");
  editBtn.addEventListener("click", function() {
    const newText = prompt("Edit the note:", text);
    if (newText !== null) {
      noteItem.querySelector(".note-text").textContent = newText;
    }
  });

  // Add event listener for delete button
  const deleteBtn = noteItem.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function() {
    noteList.removeChild(noteItem);
  });
}

addNoteBtn.addEventListener("click", function() {
  const noteText = noteInput.value.trim();
  if (noteText !== "") {
    createNoteItem(noteText);
    noteInput.value = "";
  }
});
