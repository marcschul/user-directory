import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('Header tests', () => {
  test('should render Header with "User Dictionary"', () => {
    render(<App />);
    const linkElement = screen.getByText(/User Dictionary/i);
    expect(linkElement).toBeInTheDocument();
  });
});
