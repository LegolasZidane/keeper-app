import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function editNote(id) {

    setNotes(prevNotes => {
      return prevNotes.map((noteItem, index) => ( index === id ? { ...noteItem, isEditing: true} : noteItem));
    });

  }

  function addEditedNote(editedNote, id) {
    console.log(editedNote);
    setNotes(prevNotes => {
      return prevNotes.map((notes, index) => ( index === id ? { ...editedNote, isEditing: false} : notes));
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            edit={noteItem.isEditing}
            onDelete={deleteNote}
            onEdit={editNote}
            onComplete={addEditedNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
