import './styles/NoteItem.css'

export default function NoteItem({ note, onDelete, onChange }) {
    return(
        <>  
        <span onClick={() => onChange(note.id)} className={note.priority}>
            {note.text}
        </span>
            <button className="DelBtn" onClick={() => onDelete(note.id)}>Delete</button>
        </>
    );
}