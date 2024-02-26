'use client'
import { TiPlus } from 'react-icons/ti'

const ModalButton = () => {
    return <button onClick={() => document.getElementById('my_modal_add_employee').showModal()} className="btn btn-sm bg-red-700 text-white" >
        <span><TiPlus></TiPlus></span>
        employee
    </button>
}

export default ModalButton
