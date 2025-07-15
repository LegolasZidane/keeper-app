import React, {useState} from "react"; 
import DeleteIcon from "@mui/icons-material/Delete"; 
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

function Note(props) { 

  const [note, setNote] = useState({
      title: props.title,
      content: props.content,
      isEditing: false
    });

  function deleteClick() { 
    props.onDelete(props.id); 
  } 

  function editClick() {
    setNote(prevNote => {
      return {
        ...prevNote,
        isEditing: true
      }
    }); 
    props.onEdit(props.id);
  } 

  function handleChange(event) {
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function doneClick() {
    setNote(prevNote => {return {...prevNote, isEditing: false}});
    props.onComplete(note, props.id);
  }

  return ( 
    <div className="note"> 
      <h1 className="title" hidden={props.edit}>{props.title}</h1> 
      <p className="content" hidden={props.edit}>{props.content}</p>
      
      <input className="title" name="title" onChange={handleChange} type="text" hidden={!props.edit} value={note.title}/>
      <textarea className="content" name="content" onChange={handleChange} hidden={!props.edit} value={note.content}></textarea> 
      
      <button className="button" onClick={editClick} hidden={props.edit}> 
        <EditIcon /> 
      </button>
      <button className="button" onClick={deleteClick} hidden={props.edit}> 
        <DeleteIcon /> 
      </button>
      <button className="button" onClick={doneClick} hidden={!props.edit}> 
        <DoneIcon /> 
      </button> 
    </div> 
  ); 
} 

export default Note; 