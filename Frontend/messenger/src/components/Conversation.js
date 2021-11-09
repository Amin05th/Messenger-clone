import React from 'react'
import {useConversations} from '../Context/Conversationprovider'
import '../CssFiles/Conversation.css'


export default function Conversation() {
    const {conversations, selectConversationIndex} = useConversations()

    return (
        <ul className = 'ConversationUnorderedList'>
            {conversations.map((conversation, index) => (
        <li className = 'ConversationList'
          key={index}
          onClick={() => selectConversationIndex(index)}
        >
          {conversation.recipients.map(r => r.name).join(', ')}
          </li>
        ))}

        </ul>
    )}

            