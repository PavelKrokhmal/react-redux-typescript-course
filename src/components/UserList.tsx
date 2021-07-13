import React, { useEffect } from 'react'
import { useAction } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const UserList: React.FC = () => {
    const {error, users, loading} = useTypedSelector(state => state.user)

    const {fetchUsers} = useAction()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Error: {error}</h1>
    }

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    {user.name}
                </div>
            ))}
        </div>
    )
}


export default UserList
