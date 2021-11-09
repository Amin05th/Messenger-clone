import React, {useState, useContext, useEffect} from 'react'
import io from "socket.io-client"

const CreateSocket = React.createContext()

export function useSocket() {
    return useContext(CreateSocket)
}

export function SocketIo({id ,children}) {
    const [socket, setSocket] = useState()

    useEffect(()=> {
        const newSocket = io("http://localhost:8000",
        {query: {id}}
        )

        setSocket(newSocket)

        return () => newSocket.close()
    },[id])

    return (
        <CreateSocket.Provider value = {socket}>
            {children}
        </CreateSocket.Provider>
    )
}
