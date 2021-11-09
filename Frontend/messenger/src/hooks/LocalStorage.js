import {useEffect,useState} from 'react'

const PREFIX = 'messenger-clone-'

export default function LocalStorage(key, initalValue) {
    const prefixedKey = PREFIX + key
    const [value, setValue] = useState(() => {
        const JsonValue = localStorage.getItem(prefixedKey)
        if(JsonValue != null) return JSON.parse(JsonValue)
        if(typeof initalValue === 'function'){
            return initalValue()
        }else {
            return initalValue
        }
    })

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    },[prefixedKey, value])

    return [value, setValue]
}

