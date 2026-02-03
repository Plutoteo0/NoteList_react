import { useState } from "react";

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
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/> 
        <select name="" id="" value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        <button onClick={onHandleSet}>Add</button>
        <button onClick={onDelete}>Delete</button>
        </>
    );
}