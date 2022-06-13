import React from 'react';
interface Props {
  users: any;
  loading: any;
}

const UsersListItem: React.FC<Props> = ({ users, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="">
      {users.map((user: any, index: number) => (
        <li key={index} className="border">
          <p>First Name: {user.name.first}</p>
          <p>Last Name: {user.name.last}</p>
          <p>Email: {user.email}</p>
          <p>Phone Number: {user.phone}</p>
          <p>Age: {user.dob.age}</p>
          <p>Gender: {user.dob.age}</p>
          <img src={user.picture.thumbnail} />
        </li>
      ))}
    </ul>
  );
};

export default UsersListItem;
// - [ ] First Name
// - [ ] Last Name
// - [ ] Email Address
// - [ ] Phone Number
// - [ ] Age
// - [ ] Gender
// - [ ] Picture
