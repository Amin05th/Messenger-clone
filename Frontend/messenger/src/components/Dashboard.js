import React from 'react'
import Sidebar from './Sidebar'
import ConversationChat from './ConversationChat'
import {useConversations} from '../Context/Conversationprovider'

export default function Dashboard({id, contacts}) {

    const {selectedConversation} = useConversations()

    return (
        <div style = {{height: '100vh', display: 'flex', margin: '0'}}>
            <Sidebar id = {id} />
           { selectedConversation && <ConversationChat id = {id}/>}
        </div>
    )
}
