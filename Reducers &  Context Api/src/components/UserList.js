import React, { useContext } from 'react'
import User from './User'
import Loading from './Loading'
import { UsersContext } from '../context/usersContext'


const UserList = () => {
    const {loading,users} =  useContext(UsersContext)
    if (loading) {
        return <Loading />
    }
    return (

        <div>
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </div>
    )
}

export default UserList