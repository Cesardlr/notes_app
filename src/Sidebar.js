import React from 'react'
import './Sidebar.css'

function Sidebar({ notes, onAddNote, deleteNote, setActiveNote, activeNote }) {

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h1>Notes</h1>
                <button onClick={onAddNote} >Add</button>
            </div>
            <div className="sidebar__notes">
                {notes.map((note) => (

                    <div
                        // Este lo hice aqui asi para que las clases sean dinamicas
                        // Aqui si el id de la nota que se le de click es igual al estado global de activeNote que contiene ahora al id de la nota que se le de click, pasara a tener el estado active asi cualquier otra nota no tendra la clase active por que no tiene el mismo id, 
                        className={`sidebar__note ${note.id === activeNote && 'active'}`}

                        key={note.id}

                        // Aqui cuando se le de click a una nota, se le pondra dentro de este estado el id de la nota a a que se le dio click
                        onClick={() => setActiveNote(note.id)}
                        >
                        <div className="sidebar__title">
                            <h4>{note.title}</h4>
                        <p className="sidebar__text">{note.body && note.body.substr(0, 100) + '...'}</p>
                            <h6>Last Modified
                                {new Date(note.lastModified).toLocaleDateString("en-GB", {
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                            </h6>
                            <p>Nota: {notes.indexOf(note) + 1}</p>
                        </div>

                        <button
                            className="sidebar__noteButton"
                            onClick={() => deleteNote(note.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
