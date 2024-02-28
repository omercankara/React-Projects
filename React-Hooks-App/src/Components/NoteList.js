import Note from "./Note"

const NoteList = ({ notes, deleteNote }) => {
    return notes.length > 0 ? (
        <div className="note-list">
            <ul>
                {notes.map(note => {
                    return (
                        <Note deleteNote={deleteNote} note={note} />
                    )
                })}
            </ul>
        </div>
    ):
    (
        <div className="empty">Henüz not eklemediniz</div>
    )

}

export default NoteList