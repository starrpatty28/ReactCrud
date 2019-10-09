import React from 'react'

const UserTable = () => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {props.users.length > 0 ? (
      props.users.map(user => (
      <tr>
        <td>Name data</td>
        <td>Username data</td>
        <td>
          <button className="button muted-button">Edit</button>
          <button className="button muted-button">Delete</button>
        </td>
      </tr>
    ))
 ) : (
   <tr>
     <td colSpan={3}>No users</td> 
   </tr>
   )}
    </tbody>
  </table>
)

export default UserTable