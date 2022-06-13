import axios from 'axios';
import React from 'react';

interface Props {
  currentPage: number;
}

const Csv: React.FC<Props> = ({ currentPage }) => {
  const getCsv = () => {
    axios({
      url: `https://randomuser.me/api/?page=${currentPage}&results=10&seed=abc&format=csv`,
      method: 'GET',
      responseType: 'blob'
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `csv-page-${currentPage}.txt`);
      document.body.appendChild(link);
      link.click();
    });
  };

  return (
    <>
      <button onClick={getCsv} className="bg-blue-200 w-[4em] rounded-sm ml-1 sm:text-3xl mb-1">
        csv
      </button>
    </>
  );
};

export default Csv;
