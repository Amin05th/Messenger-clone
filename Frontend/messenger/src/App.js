import React from 'react'
import Startpage from './components/Startpage';
import LocalStorage from './hooks/LocalStorage';
import Dashboard from './components/Dashboard'
import {Contactsprovider} from '../src/Context/Contactsprovider'
import {Conversationsprovider} from './Context/Conversationprovider'
import {SocketIo} from './Context/SocketIo'


function App() {
  const [id,setId] = LocalStorage('id')


  const dashboard = (
    <SocketIo id = {id}>
      <Contactsprovider>
        <Conversationsprovider id = {id}>
          <Dashboard id = {id}/>
        </Conversationsprovider>
      </Contactsprovider>
    </SocketIo>
  )

  return (
    id ? dashboard : <Startpage onIdSubmit = {setId}/> 
  )
  
}

export default App;
