import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCakeCandles, faMarsAndVenus } from '@fortawesome/free-solid-svg-icons';

interface Props {
  users: any;
  loading: any;
}

const UsersListItems: React.FC<Props> = ({ users, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="flex flex-col lg:flex-row lg:flex-wrap">
      {users.map((user: any, index: number) => (
        <li
          key={index}
          className="flex flex-col border text-center flex-col p-2 mb-1 lg:m-2 mt-1 rounded-xl justify-center break-words lg:max-w-[18em] lg: min-w-[18em] border-slate-400">
          <img
            className="rounded-full text-center self-center border-8 m-4 border-blue-200"
            src={user.picture.large}
          />
          <p className="text-xl font-bold">
            {user.name.first} {user.name.last}
          </p>
          <p>{user.email}</p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> {user.phone}
          </p>
          <p>
            <FontAwesomeIcon icon={faCakeCandles} /> {user.dob.age}
          </p>
          <p>
            <FontAwesomeIcon icon={faMarsAndVenus} /> {user.gender}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default UsersListItems;
