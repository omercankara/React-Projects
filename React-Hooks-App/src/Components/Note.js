const Note = ({note,deleteNote}) => {
    return  (
        <li onClick={()  => deleteNote(note.id)} key={note.id}>
            {note.id} <h1 className="title">{note.title}</h1> 
            <p>{note.description}</p>
        </li>
    )
}

export default Note