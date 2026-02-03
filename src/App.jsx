import { useState } from "react"
import NoteList from "./components/NoteList"
import NoteForm from "./components/NoteForm";


function App() {
  const [notes, setNotes] = useState([]);

  function onAddNote(note){
    setNotes(prev => [...prev, note])
  }

  function onDelete(){
    setNotes([]);
  }

  function onDeleteNote(idToDelete){
      setNotes(prev => prev.filter(note => note.id !== idToDelete))
  }

  function onChangePriority(idToChange){
    setNotes(prev => prev.map(note => {
      if(note.id === idToChange){
        if(note.priority === "low"){
          return {...note, priority: "medium"}
        }else if(note.priority === "medium"){
          return {...note, priority: "high"}
        }else if(note.priority === "high"){
          return {...note, priority: "low"}
        }
      }
      return note;
    }))
  }

  return (
    <>
      <NoteForm onAddNote={onAddNote} onDelete={onDelete}/>
      <NoteList notes={notes} onDeleteNote={onDeleteNote} onChangePriority={onChangePriority}/>
    </>
  )
}

export default App
