import { render, screen } from '@testing-library/react';
import Csv from './Csv';

describe('Csv tests', () => {
  test('should render csv', () => {
    render(<Csv currentPage={1} />);
    const linkElement = screen.getByText(/csv/i);
    expect(linkElement).toBeInTheDocument();
  });
});
