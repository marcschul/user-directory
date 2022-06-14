import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('Header tests', () => {
  test('should render Header', () => {
    render(<App />);
    const linkElement = screen.getByText(/User Directory/i);
    expect(linkElement).toBeInTheDocument();
  });
});
