import React, {useState} from 'react'
import Conversationmodal from './Conversationmodal'
import Contactmodal from './Contactmodal'
import Modal from './Modal'
import '../CssFiles/Sidebar.css'
import Contact from './Contact'
import Conversation from './Conversation'

const CONVERSATION_KEY = 'Conversation'
const CONTACT_KEY = 'Contacts'

export default function Sidebar({id}) {

    const [activeTab, setactiveTab] = useState(CONVERSATION_KEY)
    const [OpenModal, setopenModal] = useState(false)
    const ConversationOpen = activeTab === CONVERSATION_KEY

    function changeTab(index){
        setactiveTab(index)
    }

    return (
        <div className = 'editSidebar'>
            <ul className = 'editUnordertLists'>
                <li className = 'HoverButton' onClick = {() => changeTab(CONTACT_KEY)} style = {{cursor: 'pointer'}}>Contacts</li>
                <li className = 'HoverButton' onClick = {() => changeTab(CONVERSATION_KEY)} style = {{cursor: 'pointer'}}> Conversations</li>
            </ul>
            <div style= {{display: 'flex', height: '80%', overflow: 'auto', flexGrow: '1'}}>
               {ConversationOpen ? <Conversation/> : <Contact/>}
            </div>

            <div style = {{height: '10%', textAlign: 'center', borderTop: '1px solid black'}}>
                Your ID: <span style = {{fontSize: '13px', color: 'grey'}}>{id}</span>
                <button onClick = {() => setopenModal(true)} className = 'editButton'>Create {activeTab}</button>

                <Modal open = {OpenModal} onClose = {() => setopenModal(false)}>
                    {ConversationOpen ? <Conversationmodal onClose = {() => setopenModal(false)}/> : <Contactmodal onClose = {() => setopenModal(false)}/>}
                </Modal>

            </div>
        </div>

    )
}