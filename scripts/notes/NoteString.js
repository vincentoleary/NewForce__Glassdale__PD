// Write notes in HTML

export function stringNotes(notesObject) {
    return `
    <div class = "note-list__note item-container">
    <h2>Note #${notesObject.id}</h2>
    <p>This note says: ${notesObject.noteText}</p>
    <p>Its tagged to inmate: ${notesObject.criminalID}</p>
  </div>`;
}