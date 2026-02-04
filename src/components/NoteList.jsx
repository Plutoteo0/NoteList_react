
import { useState } from "react";
import NoteItem from "./NoteItem";
import './styles/NoteList.css'

export default function NoteList({ notes, onDeleteNote, onChangePriority }){
    const [filter, setFilter] = useState("all")

    const filteredNotes = notes.filter(note => filter === "all" || note.priority === filter);
        
    return(
        <>
        <select value={filter}  className="NoteListSelect" id="" onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        {notes.length > 0 && filteredNotes.length === 0 && (
            <p className="NoNotes">No notes with {filter} priority</p>
        )}
        <ul className="NoteUl">
            {filteredNotes.map(note => (
                <li key={note.id} className="NoteLi"><NoteItem note={note} onDelete={onDeleteNote} onChange={onChangePriority}/></li>
            ))}
        </ul>
        </>
        
    );
}