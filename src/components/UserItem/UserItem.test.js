import { render, fireEvent } from '@testing-library/react';
import UserItem from './UserItem';


describe('<UserItem>', () => {
    it('renders name and age correctly', () => {
        const user = {id:1, name:'User', age:10};
        const {getByText} = render(<UserItem user={user}/>)

        expect(getByText(/^User$/i)).not.toBeNull();
        expect(getByText(/^10$/)).not.toBeNull();
    })

    it('calls delete handler', () => {
        const mock = jest.fn();
        const dummyUser = {id:1, name:"", age:10};
        const {getByText} = render(<UserItem user={dummyUser} onDelete={mock}/>);

        const closeBtn = getByText(/^X$/i);
        fireEvent.click(closeBtn);

        expect(mock).toHaveBeenCalled();
    })
})