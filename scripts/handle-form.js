let notes = [];

function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}

function addNote(note) {
    notes.push(note);
    displayNote(note);
    localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes() {
    notes = JSON.parse(localStorage.getItem('notes'));
    if (notes != null) {
        notes.forEach(note => displayNote(note));
    } else {
        notes = [];
    }
}

function displayNote(note) {
    let notesSectionElement = document.getElementById('notes-section');
    let noteElementHTML = `
          <section class="content__section">
        <h1 class="content__section__header">🔴 ${note.name}</h1>
        <p>
          ${note.text}
        </p>
      </section>
    `;
    notesSectionElement.insertAdjacentHTML('afterbegin', noteElementHTML);
}

function clearNotes() {
    notes = [];
    localStorage.setItem('notes', null);
    let notesSectionElement = document.getElementById('notes-section');
    notesSectionElement.innerHTML = '';
}

function handleForm() {
    let formElement = document.getElementById('notes-form');

    formElement.addEventListener('submit', e => {
        e.preventDefault();

        let name = document.getElementById('note-name').value;
        let text = document.getElementById('note-text').value;

        if (!isEmptyOrSpaces(name) && !isEmptyOrSpaces(text)) {
            let note = {
                'name' : name,
                'text' : text
            };

            document.getElementById('note-name').value = '';
            document.getElementById('note-text').value = '';

            addNote(note);
        }
    })
}

document.addEventListener('DOMContentLoaded', handleForm);
document.addEventListener('DOMContentLoaded', loadNotes);