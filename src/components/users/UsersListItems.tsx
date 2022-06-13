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
    <ul className="flex flex-col sm:flex-row sm:flex-wrap">
      {users.map((user: any, index: number) => (
        <li
          key={index}
          className="flex flex-col border text-center flex-col p-2 mb-1 sm:m-2 mt-1 rounded-xl justify-center break-words sm:max-w-[18em] sm: min-w-[18em] border-slate-400 bg-slate-50">
          <img
            className="rounded-full text-center self-center border-8 m-4 border-blue-200"
            src={user.picture.large}
          />
          <span className="text-xl font-bold">
            {user.name.first} {user.name.last}
          </span>
          <span>
            <i>{user.email}</i>
          </span>
          <span>
            <FontAwesomeIcon icon={faPhone} /> {user.phone}
          </span>
          <span>
            <FontAwesomeIcon icon={faCakeCandles} /> {user.dob.age}
          </span>
          <span>
            <FontAwesomeIcon icon={faMarsAndVenus} /> {user.gender}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default UsersListItems;
