import DataGet from '@/config/DataGet'
import React from 'react'

const UpdateEmploye = async({ id }) => {
    const UserData = await DataGet(`employe/${id}`)
    console.log(UserData)
    return (
        <div>

        </div>
    )
}

export default UpdateEmploye
