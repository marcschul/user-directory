import React from 'react';

interface Props {
  itemsPerPage: number;
  totalItems: number;
  paginate: any;
}

const Pagination: React.FC<Props> = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="">
        {pageNumbers.map((number) => (
          <li key={number} className="">
            <a onClick={() => paginate(number)} href="!#" className="">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
