import { useState } from "react"

const AddNote = (props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription]  = useState('')
    const HandeSubmit = (e) => {
        e.preventDefault()
        props.newNote(title,description)
        setTitle('')
        setDescription('')
    }
    return(
       <form onSubmit={HandeSubmit}>
         <label htmlFor="title">Title</label>
         <input type="text" id="item"  value={title} onChange={(e) => setTitle(e.target.value)} />
         <input type="text" id="item"  value={description} onChange={(e) => setDescription(e.target.value)} />
         <input type="submit" value="Add Note" />
       </form>
    )
}

export default AddNote