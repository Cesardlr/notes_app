import React from 'react'
import ReactMarkdown from 'react-markdown'
import './Main.css'

// Conseguimos la actuve note

// const an = notes.find(note => note.id === activeNote)


function Main(props) {
    const onEditField = (key, value) => {
        props.onUpdateNote({
            // Aqui pasamos la nota que ya estaba ahi desde antes con el ...
            // Solos e cambiaria lo que se ocupa cambiar y ahorramos recursos
            ...props.activeNote,
            // Cambiamos las keys que queremos cambiar y le ponemos el nuevo valor
            [key]: value,
            lastModified: Date.now()
        })
    }

    // Aqui si no hay active note se mostraria esto

    if (!props.activeNote) {
        props.notes.map((note) => {
            console.log(note)
        })
        return (
            <div className="main__defaultText">
                <h2>No Active Notes</h2>
            </div>
        )
    }

    return (
        <div className="main">
            <div className="main__container">
                <div className="main__form">

                    <input
                        type="text"
                        id="title"
                        value={props.activeNote.title}
                        onChange={(e) => onEditField("title", e.target.value)}
                    />
                    <textarea
                        id="body"
                        placeholder="Write your note here..."
                        value={props.activeNote.body}
                        onChange={(e) => onEditField("body", e.target.value)}
                    ></textarea>
                </div>

                <div className="main__text">

                    <h3>{props.activeNote.title}</h3>
                    <ReactMarkdown>{props.activeNote.body}</ReactMarkdown>
                </div>
            </div>


        </div>

    )
}
{/* <button onClick={console.log(props.ac)}>si</button> */ }

export default Main
