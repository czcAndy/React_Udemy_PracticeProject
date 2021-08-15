import { fireEvent, render } from "@testing-library/react";
import DisplayUsers from './DisplayUsers'

describe('<DisplayUsers>', () => {

    it('renders empty list message', () => {
        const {getByText} = render(<DisplayUsers/>);
        const paragraph = getByText(/^No users added yet.$/i);
        expect(paragraph).not.toBeNull();
   });

   it('renders items', () => {
    const userList = [
        {id: 1, name: 'User 1', age: 10},
        {id: 2, name: 'User 2', age: 12}
    ]

    const {getByText} = render(<DisplayUsers users={userList} />);
    const user1Name = getByText(/^User 1$/i);
    const user1Age = getByText(/^10$/i);

    const user2Name = getByText(/^User 2$/i);
    const user2Age = getByText(/^10$/i);

    expect(user1Name).not.toBeNull();
    expect(user1Age).not.toBeNull();

    expect(user2Name).not.toBeNull();
    expect(user2Age).not.toBeNull();
});

 
});
