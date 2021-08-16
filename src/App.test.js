import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe("Test App", () => {
  it('renders', () => {
    render(<App></App>)
  });

  it('works Add User flow', () => {
    const {getByText, getByLabelText} = render(<App/>);

    fireEvent.change(getByLabelText(/Name/i), {target: {value: "User"}});
    fireEvent.change(getByLabelText(/Age/i), {target: {value: "20"}});

    const submitButton = getByText(/submit/i);
    fireEvent.click(submitButton);

    const user1Name = getByText(/^User$/i, {selector:'h3'});
    const user1Age = getByText(/^20$/i, {selector: 'p'});

    expect(user1Name).not.toBeNull();
    expect(user1Age).not.toBeNull();
  })
})
