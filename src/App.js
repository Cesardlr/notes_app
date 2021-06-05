import React, { useState } from 'react'
import './App.css';
import uuid from 'react-uuid'
import Main from './Main';
import Sidebar from './Sidebar';

function App() {
  const [notes, setNotes] = useState([])

  //Aqui si esta false no significa que tiene que ser asi siempre, significa que se pondra cuando se de click por primera vez y se cambie al note.id 
  const [activeNote, setActiveNote] = useState(false)

  // const [noteTitle, setNoteTitle] = useState('Untitled Note')

  // const [noteBody, setNoteBody] = useState('')


  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: 'Untitled Note',
      body: '',
      lastModified: Date.now(),
    }

    setNotes([newNote, ...notes])
  }

  const onUpdateNote = (updateNote) => {
    const updateNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updateNote
      }

      return note;
    })

    setNotes(updateNotesArray)
  }



  const deleteNote = (id) => {
    // console.log(e.currentTarget.parentNode)

    setNotes(
      notes.filter((note) => {
        if (note.id !== id) {
          return note
        }
        return
      })
    )
  }


  let an;

  const getActiveNote = () => {
    // Esto devolvera el objeto de la nota actuva ahorita

    return notes.find(note => note.id === activeNote)
  }

  return (
    <div className="container">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        deleteNote={deleteNote}
        setActiveNote={setActiveNote}
        activeNote={activeNote}
      />

      <Main
        notes={notes}
        activeNote={getActiveNote()}
        onUpdateNote={onUpdateNote}
      />
    </div>
  );
}

export default App;
