import { useState, useEffect } from 'react';
import axios from 'axios';
import UsersListItem from './UsersListItem';
import Pagination from '../pagination/Pagination';
import Csv from '../csv/Csv';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [usersPerPage, setUsersPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://randomuser.me/api/?page=${currentPage}&results=10&seed=abc`
        );
        console.log(res.data);
        setUsers(res.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, [currentPage]);

  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Pagination itemsPerPage="10" totalItems="100" paginate={paginate} />
      <Csv currentPage={currentPage} />
      <UsersListItem users={users} loading={loading} />
    </div>
  );
};

export default UsersList;
