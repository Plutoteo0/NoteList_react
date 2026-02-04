import { useState } from "react";
import './styles/NoteForm.css'

export default function NoteForm({ onAddNote, onDelete }) {
    const [text, setText] = useState("");
    const [priority, setPriority] = useState("low")

    function onHandleSet(){
        if(text.trim() === ""){
            return;
        }else {
            const newText = {id: Date.now(), text: text, priority: priority}
            onAddNote(newText);
            setText("");
        }
    }

    return(
        <>
        <input type="text" placeholder="Type your note" value={text} onChange={(e) => setText(e.target.value)} className="inputNote"/> 
        <select name="" id="" value={priority} onChange={(e) => setPriority(e.target.value)} className="selectForm">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        <button onClick={onHandleSet} className="AddBtn">Add</button>
        <button onClick={onDelete} className="DeleteBtn">Delete all</button>
        </>
    );
}