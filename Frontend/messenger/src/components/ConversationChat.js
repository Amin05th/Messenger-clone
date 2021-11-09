import React, {useState, useCallback} from 'react'
import '../CssFiles/ConversationChat.css'
import {useConversations} from '../Context/Conversationprovider'

export default function ConversationChat() {
    const [text, setText] = useState('')
    const {sendMessage, selectedConversation} = useConversations()
    const setRef = useCallback(node => {
        if(node){
        node.scrollIntoView({ smooth: true})
        }
    }, [])

    function handleSubmit(e){
        e.preventDefault()
        sendMessage(selectedConversation.recipients.map(r => r.id), text)
        setText('')
    }
    return (
        <div className = 'ConversationBox'>
            <div className = 'ConversationMessage'>
                <div className = 'Conversationmessages'>
                    {selectedConversation.messages.map((message, index) => {
                        const ChatMessages = {
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: '4px',
                            alignItems: message.fromMe ? 'flex-end' : 'flex-start',
                        }

                        const MessageText = {
                            padding: '1% 2% 1% 2%',
                            borderRadius: '5px',
                            backgroundColor: message.fromMe ? '#0275d8' : null,
                            color: message.fromMe ? 'white' : null,
                            border: message.fromMe ? null : '1px solid black'
                        }

                        const Messagesender = {
                            color: 'grey',
                            fontSize: 'small'
                        }

                        return (
                            <div ref = {setRef} key = {index} style = {ChatMessages}>
                                <div style = {MessageText}>{message.text}</div>
                                <div style = {Messagesender}>{message.fromMe ? 'You' : message.senderName}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <form onSubmit = {(e) => handleSubmit(e)} className = 'SendBox'>
                <input type = 'text' className = 'Textfield'
                        placeholder = '' onChange = {(e) => setText(e.target.value)}
                        value = {text}
                        required/>
                <button type = 'submit'>Send Message</button>
            </form>
        </div>
    )
}
