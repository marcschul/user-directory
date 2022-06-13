import { useState, useEffect } from 'react';
import axios from 'axios';
import UsersListItem from './UsersListItem';
import Pagination from '../pagination/Pagination';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const res = await axios.get('https://randomuser.me/api/?page=1&results=100&seed=abc');
        console.log(res.data);
        setUsers(res.data.results);
        setLoading(false);
        //
        setCurrentPage(1);
        setUsersPerPage(10);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1 className="text-xl">Users</h1>
      <UsersListItem users={currentUsers} loading={loading} />
      <Pagination itemsPerPage={usersPerPage} totalItems={users.length} paginate={paginate} />
    </div>
  );
};

export default UsersList;
