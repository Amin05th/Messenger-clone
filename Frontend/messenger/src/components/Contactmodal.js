import React, {useRef} from 'react'
import '../CssFiles/Contactmodal.css'
import {useContacts} from '../Context/Contactsprovider'

export default function Contactmodal({onClose}) {
    const idRef = useRef()
    const nameRef = useRef()
    const {createContact} = useContacts()
    
    function onSubmit(e) {
        e.preventDefault()
        createContact(idRef.current.value, nameRef.current.value)
        onClose()
    }
    return (
        <div className = 'ContactmodalBox'>
            <form onSubmit = {(e) => onSubmit(e)}>
                <h2 style = {{marginTop: '10px'}}>Create Contact</h2>
                    <button className = 'exitButton' onClick = {onClose}> <span className = 'Exitlogo'>X</span></button>
                    <label htmlFor = 'IdInput' className = 'Label'>ID</label>
                    <input ref = {idRef} id = 'IdInput' className = 'ContactInput' required/>
                    
                    <label htmlFor = 'NameInput' className = 'Label'>Name</label>
                    <input ref = {nameRef} id = 'NameInput' className = 'ContactInput' required/>
                    <button className = 'CreateContact'>Create</button>
            </form>
        </div>
    )
}
