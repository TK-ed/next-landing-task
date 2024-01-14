"use client"

import { useState } from "react"
import ButtonType from './buttonType'

export default function Button() {
    const [modal, setModal] = useState(false)
    
    return (
        <>
            <div className="flex flex-row justify-center space-x-7 ">
            <ButtonType />
            </div>
        </>
    )
}