import Note from '../componentes/Note.jsx'
import Creator from '../componentes/Creator.jsx'
import '../componentes/NoteList.css'

const NoteList = ({ notes, createNote, handleDelete, handleEdit }) => {
    return (
        <div className='notes-list row'>
            <Creator createNote={createNote}/>
            {notes.map((note)=><Note key={note.id} id={note.id} tittle={note.tittle} text={note.text} handleDelete={handleDelete} handleEdit={handleEdit}/>)}
        </div>
    );
}

export default NoteList;