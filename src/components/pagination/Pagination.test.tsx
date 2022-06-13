import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination tests', () => {
  test('should render Pagination', () => {
    const itemsPerPage = 10;
    const totalItems = 100;
    const currentPage = 1;
    const setCurrentPage = () => {};
    const paginate = () => {
      setCurrentPage();
    };
    render(
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        paginate={paginate}
        currentPage={currentPage}
      />
    );
    const linkElement = screen.getByText(/2/i);
    expect(linkElement).toBeInTheDocument();
  });
});
