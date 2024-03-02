'use client'
import { useSession } from 'next-auth/react'
import { TiPlus } from 'react-icons/ti'

const ModalButton = ({ text ,domId}) => {
    const session = useSession()
    if (session?.data?.user?.role !== 'admin') {
        return <span></span>
    }
    return <button onClick={() => document.getElementById(domId).showModal()} className="btn btn-sm bg-red-700 text-white" >
        <span><TiPlus></TiPlus></span>
        {text ? text : ''}
    </button>
}

export default ModalButton
