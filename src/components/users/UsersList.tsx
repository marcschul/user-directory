import { useState, useEffect } from 'react';
import axios from 'axios';
import UsersListItems from './UsersListItems';
import Pagination from '../pagination/Pagination';
import Csv from '../csv/Csv';

const UsersList = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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

  const itemsPerPage = 10;
  let totalItems = 100;

  return (
    <div>
      <div className="flex">
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          paginate={paginate}
          currentPage={currentPage}
        />
        <Csv currentPage={currentPage} />
      </div>
      <UsersListItems users={users} loading={loading} />
    </div>
  );
};

export default UsersList;
