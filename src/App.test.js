import { render, screen } from '@testing-library/react';
import App from './App';

describe("Test App", () => {
  it('renders', () => {
    render(<App></App>)
  });
})
