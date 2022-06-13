import React from 'react';

interface Props {
  itemsPerPage: string;
  totalItems: string;
  paginate: any;
}

const Pagination: React.FC<Props> = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(Number(totalItems) / Number(itemsPerPage)); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="bg-green-100 text-center">
        {pageNumbers.map((number) => (
          <li key={number} className="border">
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
