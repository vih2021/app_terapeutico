import '../css/iaservice.css'
import React, { useRef, useState, useEffect } from 'react';
import { Grid, Icon } from '@mui/material'
import defaultUser from '../assets/IAService/defaultuser.jpg'
 
export default function IAService(){
    const messageRef = useRef(null);
    const messagesScrollRef = useRef(null);

    const [message, setMessage] = useState('');

    const handleChange = (event) => {
      setMessage(event.target.value);
    };

    const addMessage = (event) => {
        if(event.key == 'Enter'){
            const novaDiv = document.createElement("div");
            novaDiv.className = "message"; 
            novaDiv.style.justifyContent= "end";
            novaDiv.innerHTML = `<p id='textUser'>${message}</p>`;
    
            messageRef.current.parentElement.insertBefore(novaDiv, messageRef.current.nextSibling);
    
            messageRef.current = novaDiv;
    
            cleanInput();

            
            document.getElementById('status').style.visibility = "visible";

            const timer = setTimeout(() =>{
               addIAResponse();
               document.getElementById('status').style.visibility = "hidden";
            }, 1500);

            scrollMessagesToEnd();
        }
      };

    function addIAResponse(){
        const novaDiv = document.createElement("div");
        novaDiv.className = "message"; 
        novaDiv.innerHTML = `<div class='messageCircle'></div>
                             <p id='textService'>Desculpe, nosso atendiemnto não está disponível.</p>
                            `;

        messageRef.current.parentElement.insertBefore(novaDiv, messageRef.current.nextSibling);

        messageRef.current = novaDiv;

        scrollMessagesToEnd(); 
    }

    function cleanInput(){
        setMessage('');
    }

    function scrollMessagesToEnd(){
        messagesScrollRef.current.scrollTop = messagesScrollRef.current.scrollHeight;
    }


    return(
        <>
            <Grid className="area" container direction="row" justifyContent="center" alignItems="center">
                <Grid container item x={2} md={2} justifyContent="center"></Grid>   
                <Grid container className='bar' item x={8} md={8} justifyContent="start">
                    <div className='circle'></div>
                    <p id='status'>writting ...</p>
                </Grid>
                <Grid container item x={2} md={2} justifyContent="center"></Grid>  
                <Grid container item x={2} md={2} justifyContent="center"></Grid>  
                <Grid container className='chat' item x={8} md={8} justifyContent="center">
                    <div className='messages' ref={messagesScrollRef}>
                        <div className='message' ref={messageRef}>
                            <div className='messageCircle'></div>
                            <p id='textService'>“Eai parça, bora se tratar :D.</p>
                        </div>
                    </div>
                    <input type="text" value={message} onChange={handleChange} onKeyDown={addMessage} className='inputText'></input>
                </Grid>
                <Grid container item x={2} md={2} justifyContent="center"></Grid>        
            </Grid>   
        </>
    )
}