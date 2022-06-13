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
        <li key={index} className="">
          {user.name.title}
        </li>
      ))}
    </ul>
  );
};

export default UsersListItem;
