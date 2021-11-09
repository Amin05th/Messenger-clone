import React from 'react'
import '../CssFiles/Modal.css'

export default function Modal({open, children}) {
    if (!open) return null
    return (
        <div className = 'ModalBox'>
            {children}
        </div>
    )
}
