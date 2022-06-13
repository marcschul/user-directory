import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination tests', () => {
  test('should renders Pagination', () => {
    const itemsPerPage = 10;
    const totalItems = 100;
    const setCurrentPage = () => {};
    const paginate = () => {
      setCurrentPage();
    };
    render(<Pagination itemsPerPage={itemsPerPage} totalItems={totalItems} paginate={paginate} />);
    const linkElement = screen.getByText(/ul/i);
    expect(linkElement).toBeInTheDocument();
  });
});
