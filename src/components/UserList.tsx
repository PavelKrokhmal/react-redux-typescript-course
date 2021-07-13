import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { fetchUsers } from '../store/action-creators/user'

export const UserList: React.FC = () => {
    const {error, users, loading} = useTypedSelector(state => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

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
