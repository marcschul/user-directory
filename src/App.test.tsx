import { render } from '@testing-library/react';
import App from './App';

describe('app tests', () => {
  test('render app should not crash', () => {
    render(<App />);
  });
});
