import React, {useState} from 'react'
import '../CssFiles/Conversationmodal.css'
import {useContacts} from '../Context/Contactsprovider'
import {useConversations} from '../Context/Conversationprovider'

export default function Conversationmodal({onClose}) {
    const [selecedCoversation, setselecedCoversation] = useState([])
    const {contacts} = useContacts()
    const {createConversation} = useConversations()
    
    
    function submitConversation(e) {
        e.preventDefault()
        createConversation(selecedCoversation)
        onClose()
        
    }

    function handleCreateConversation(contactId) {
        setselecedCoversation(prevConv => {
            if(prevConv.includes(contactId)){
            return prevConv.filter(prevConversation=> {
                return contactId !== prevConversation
            })
            }
            else {
                return [...prevConv, contactId]
            }
        })
        
    }

    return (
        <form onSubmit = {(e) => submitConversation(e)}  className = 'ConversationmodalBox'>
            <button onClick = {onClose} className = 'exitButton'>X</button>
            <ul className = 'editConvoversationmodalContact'>
                {contacts.map(contacts => {
                    return <li key = {contacts.id}>
                       <input id = {contacts.id} type = 'checkbox' 
                            onChange = {() => {handleCreateConversation(contacts.id)}}
                       />
                       <label htmlFor = {contacts.id}>{contacts.name}</label>
                    </li>
                })}
            </ul>
            <button type = 'submit' className = 'CreateConversation'>Create</button>
        </form>
    )
}
