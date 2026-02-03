
import NoteItem from "./NoteItem";
import './styles/NoteList.css'

export default function NoteList({ notes, onDeleteNote, onChangePriority }){
    if (notes.length === 0) {
        return <p>No notes</p>
    }

    return(
        <ul>
            {notes.map(note => (
                <li key={note.id} className="NoteLi"><NoteItem note={note} onDelete={onDeleteNote} onChange={onChangePriority}/></li>
            ))}
        </ul>
    );
}