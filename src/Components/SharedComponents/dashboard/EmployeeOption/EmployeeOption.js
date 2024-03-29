import DataGet from '@/config/DataGet'
import React from 'react'

const EmployeeOption = async () => {
    const res = await DataGet('employe/hasteam')
    // console.log(res)
    return (
        <>
            {
                res?.length > 0 && res.map(item => <option key={item?._id} value={item?._id}>{item?.FullName}</option>)
            }
        </>
    )
}

export default EmployeeOption
