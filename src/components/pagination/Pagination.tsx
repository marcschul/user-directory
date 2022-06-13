import React from 'react';

interface Props {
  itemsPerPage: number;
  totalItems: number;
  paginate: any;
}

const Pagination: React.FC<Props> = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex">
      <ul className="flex flex-wrap bg-blue-500 rounded-sm mb-1 text-slate-200 lg:text-3xl">
        {pageNumbers.map((number) => (
          <li key={number} className="text-1xl m-1 p-1">
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
