import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listUsers } from '../actions/userActions'
const UserListScreen = () => {
  const { users } = useSelector((state) => state.userList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listUsers())
  }, [dispatch])

  return (
    <div>
      <h1>All Users</h1>

      {users.map((user) => (
        <div key={user._id}>
          <p>
            <strong>Name: </strong> {user.name}
          </p>
          <p>
            <strong>Email: </strong> {user.email}
          </p>
        </div>
      ))}
    </div>
  )
}

export default UserListScreen
