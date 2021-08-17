import React, {useState} from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';


describe("Test App", () => {
  
  afterEach(() => {
    jest.clearAllMocks();
  });

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

  it('works Remove User flow', () => {
    const userList = [
      { id: 1, name: "User 1", age: 10 },
      { id: 2, name: "User 2", age: 12 },
    ];

    jest.spyOn(React, 'useState').mockImplementationOnce(() => React.useState(userList));

    const { queryByText, container } = render(<App />);
    const user2btn = container.getElementsByClassName("userListItem-close")[0];
    fireEvent.click(user2btn);
    
    expect(queryByText(/^User 2$/i)).not.toBeNull();
    expect(queryByText(/^12$/)).not.toBeNull();

    expect(queryByText(/^User 1$/i)).toBeNull();
    expect(queryByText(/^10$/)).toBeNull();
    
  })
})
