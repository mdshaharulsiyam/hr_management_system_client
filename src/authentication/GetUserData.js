import React from 'react'

const GetUserData = async(email,password) => {
    const GetUser = await fetch(`http://localhost:5000/employe/${email}?password=${password}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return await GetUser.json()
}

export default GetUserData
