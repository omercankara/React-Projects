import { useEffect, useState } from "react"
import AddNote from "./AddNote"
import NoteList from "../Components/NoteList"
import Navbar from "../Components/Navbar"

function NoteApp() {
    const [notes, setNotes] = useState([

    ])

    //Didmount ile sayfa ilk açıldıgında verileri çek ve bas
    useEffect(() => {
        console.log("Loaded component")
        const data = JSON.parse(localStorage.getItem("notes"));
        if (data) {
            setNotes(data)
        }
    }, [])

    //notes da degişiklik oldugunda verileri güncelle
    useEffect(() => {
        console.log("UPDATED COMPONENT");
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    const newNote = (title, description) => {
        setNotes([...notes, { id: notes.length + 1, title: title, description: description }])
    }

    const deleteNote = (id) => {
      setNotes(notes.filter((note) => note.id !== id))
    }

    return (
        <div className="container">
            <Navbar notes={notes} />
            <NoteList deleteNote={deleteNote} notes={notes} />
            <AddNote newNote={newNote} />
        </div>
    )
}

export default NoteApp