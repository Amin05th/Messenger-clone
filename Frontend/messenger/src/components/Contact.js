import React from 'react'
import {useContacts} from '../Context/Contactsprovider'
import '../CssFiles/Contact.css'

export default function Contact() {

    const {contacts} = useContacts()

    return (
        <ul className = 'UnorderedList'>
        {contacts.map(contacts => (
           <li className = 'Lists' key = {contacts.id}>
               {contacts.name}
           </li>
        ))}
        </ul>
    )
}
