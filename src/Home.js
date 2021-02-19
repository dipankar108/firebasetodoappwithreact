import React, { forwardRef, useState ,useEffect} from 'react';
import  db  from './firebase';
import firebase from 'firebase';
import { Button, Input,FormControl, InputLabel } from '@material-ui/core';
import "./Home.css";
function Home() {
    const [todos, settodo] = useState([]);
    const [input, setInput] = useState('');
   const handletodo = (event) => { 
        console.log(event);
    }
    useEffect(() => { 
        db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => settodo(snapshot.docs.map(doc => ({'id':doc.id,'tododata':doc.data().todo}))));
        
    },[]);
    function handle(event) { 
        event.preventDefault();
        db.collection('todos').add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        setInput('');
        
    }
    return (
        <div>
            <form>
            
                <input value={input} onChange={(event) => { setInput(event.target.value) }}>
                    
                </input>
                <button disabled={
                   !input} color="primary" onClick={handle} variant="contained" typeof='submit'>Todo</button>
            </form>
            <ul>
                {todos.map((todo) => <li className="todolist">{  todo.tododata} <button onClick={event=>db.collection("todos").doc(todo.id).delete()}>delete me</button></li>)}
            </ul>
        </div>
    );
}
export default Home;