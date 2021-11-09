import React, { useContext } from 'react'
import LocalStorage from '../hooks/LocalStorage';

const ContactsContext = React.createContext()

export function useContacts() {
  return useContext(ContactsContext)
}

export function Contactsprovider({ children }) {
  const [contacts, setContacts] = LocalStorage('contacts', [])

  function createContact(id, name) {
    setContacts(prevContacts => {
      return [...prevContacts, { id, name }]
    })
  }

  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
    
  )
}