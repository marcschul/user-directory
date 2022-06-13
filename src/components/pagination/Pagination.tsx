import React from 'react';

interface Props {
  itemsPerPage: number;
  totalItems: number;
  paginate: any;
  currentPage: any;
}

const Pagination: React.FC<Props> = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex">
      <ul className="flex flex-wrap bg-cyan-900 rounded-sm text-slate-200 sm:text-3xl sm:ml-2">
        {pageNumbers.map((number) => (
          <li key={number} className="text-1xl m-1 p-1 hover:cursor-pointer">
            <a
              onClick={() => paginate(number)}
              className={number === currentPage ? 'underline' : ''}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
