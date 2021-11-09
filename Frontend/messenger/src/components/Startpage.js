import React, {useState, useRef}from 'react'
import '../CssFiles/Startpage.css'
import {v4 as uuidV4} from 'uuid'
import Modal from './Modal'

export default function Startpage({onIdSubmit}) {
    const [OpenModal, setopenModal] = useState(false)
    const CustomIdRef = useRef()
    function onClickLogin(e){
        e.preventDefault()
        setopenModal(true)
    }

    function submitConversation(e){
        e.preventDefault()
        onIdSubmit(CustomIdRef.current.value)
    }

    function createNewId(){
        onIdSubmit(uuidV4())
    }

    return (

        <div className = 'screen'>
             <div style = {{marginBottom: '10%'}}>
            <center><img className = 'editImmage' alt = 'You Browser does not support Picturefunction' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/600px-Facebook_Messenger_logo_2020.svg.png'></img></center>
            <p className = 'editParagraph'>Welcome to <br/>Messenger</p>
            </div>
            <form style = {{display: 'flex', flexDirection: 'column'}}>
                <button onClick = {(e) => onClickLogin(e)} className = 'LoginButton'>Login</button>
                <button className = 'createButton' onClick = {createNewId}>Create new ID</button>
                </form>

                <Modal open = {OpenModal}>
                <form onSubmit = {(e) => submitConversation(e)}  className = 'ConversationmodalBox'>
                    <h2 style = {{marginTop: '10px', display: 'flex', justifyContent: 'center'}}>Write ID</h2>
                    <label htmlFor = 'IdInput' className = 'Label'>ID</label>
                    <input ref = {CustomIdRef} id = 'IdInput' className = 'ContactInput' required/>
                    <button type = 'submit' className = 'CreateContact'>Create</button>
                </form>
                </Modal>
            </div>
            
            
            
    )
}