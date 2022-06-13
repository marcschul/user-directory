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
    <ul className="flex flex-col lg:flex-row lg:flex-wrap">
      {users.map((user: any, index: number) => (
        <li
          key={index}
          className="flex flex-col border text-center flex-col p-2 mb-1 lg:m-2 mt-1 rounded-xl justify-center break-words lg:max-w-[18em] lg: min-w-[18em]">
          <img
            className="rounded-full text-center self-center border-8 m-4"
            src={user.picture.large}
          />
          <p>
            {user.name.first} {user.name.last}
          </p>
          <p>{user.email}</p>
          <p>#: {user.phone}</p>
          <p>Age: {user.dob.age}</p>
          <p>Gender: {user.dob.age}</p>
        </li>
      ))}
    </ul>
  );
};

export default UsersListItem;
