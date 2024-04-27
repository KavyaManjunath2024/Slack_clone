import React from 'react'
import styled from "styled-components"
import {Button} from "@mui/material"
import { db } from '../firebase'
import firebase from "firebase/compat/app";
import { useState } from 'react';
// import {chatRef} from "../components/Chat.js";



function ChatInput({channelName, channelId}) {
    const [input, setInput] = useState("");
    

    const sendMessage = (e) => {
        e.preventDefault(); // Prevents refresh
      


        if (!channelId) {
            return false;
        }

        db.collection('rooms').doc(channelId).collection('messages').add(
         { message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: "Kavya Mannjunath",
            userImage: "https://tse3.mm.bing.net/th?id=OIP.roeJGz3eeyhxK3XRQ0LxpQHaFj&pid=Api&P=0&h=180"
       });
       setInput("");

    };




   

  return (
    <ChatInputContainer>
        <form>
            <input  value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName}`}  />
            <Button hidden type="submit"  onClick={sendMessage}>
                SEND
            </Button>
        </form>
      
    </ChatInputContainer>
  )
}
export default ChatInput

const ChatInputContainer = styled.div`
border-radius: 20px;

> form {
position: relative;
display: flex;
justify-content: center;

}

> form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    outline: none;
}
> form > button {
    display: none !important;
}

`;
