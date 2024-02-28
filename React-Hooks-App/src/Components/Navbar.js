
const Navbar = ({ notes }) => { //props içeriklerini obje olarak yakalama yöntemi
    return (
        <div className="navbar">
            <h1>NoteApp</h1>
            <p>Toplam {notes.length} Adet not mevcut</p>
        </div>
    )
}

export default Navbar