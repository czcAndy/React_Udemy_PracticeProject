import { render, fireEvent } from '@testing-library/react';
import UserItem from './UserItem';


describe('<UserItem>', () => {
    it('renders', () => {
        render(<UserItem/>)
    })

    it('renders name and age correctly', () => {
        const {getByText} = render(<UserItem name='User' age={10}/>)

        expect(getByText(/^User$/i)).not.toBeNull();
        expect(getByText(/^10$/)).not.toBeNull();
    })
})