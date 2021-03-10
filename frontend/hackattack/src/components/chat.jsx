import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import  api  from "../api.js";
import './chat.scss';
import { v4 as uuidv4 } from 'uuid';


const myId = uuidv4();

//const socket = io(api.get('/socket.io'));
const socket = io('http://localhost:8081');
socket.on('connection',() => console.log('[IO] Connect => New connection'));
const Chat = () =>{
 const [ message, setMessage] = useState('');
 const [ messages, setMessages] = useState([]);

 useEffect(()=>{
      const handleNewMessage = newMessage =>{
            setMessages([...message, newMessage]);
            socket.on('chat.message',handleNewMessage);
            return () => socket.off('chat.message',handleNewMessage);
      }
 },[messages]);
 const handleInputChange = event => setMessage(event.target.value);
 const handleFormSubmit = e =>{
      e.preventDefault()
      if(message.trim()){
          socket.emit('chat.message',{
              id: myId,
              message
          });
          setMessage('');
      }
}
return  (
    <main className="container">
        <ul className="list">
            {
                messages.map((m, index) => (
                    <li className={`list__item list__item--${m.id === myId ? 'mine':'other' }`} key={index}>
                       <span className={`message message--${m.id === myId ? 'mine':'other'}`}> { m.message } </span>
                    </li>
                ))
            }
        </ul>
        <form className="form" onSubmit={handleFormSubmit}>
           <input type="text" onChange={handleInputChange} className="form__field"
                  placeholder="Type a new message here"
                  name="Message"
                  value={ message }/>
        </form>
    </main>
    );
}


export default Chat;