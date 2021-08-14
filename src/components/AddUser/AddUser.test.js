import { fireEvent, render } from "@testing-library/react";
import AddUser from './AddUser';

describe('<AddUser>', () => {
    
    it('renders', () => {
        render(<AddUser/>);

    });

    it('delegates user creation', () =>{
        const mock = jest.fn();
        const {getByText, getByLabelText} = render(<AddUser onSubmit={mock}/>);

        fireEvent.change(getByLabelText(/Name/i), {target: {value: "User"}});
        fireEvent.change(getByLabelText(/Age/i), {target: {value: "20"}});

        const submitButton = getByText(/submit/i);
        fireEvent.click(submitButton);
        expect(mock).toBeCalled();
    });

    it('shows error if invalid name', () =>{
        // Create placeholder div for the createPortal render of the Modal dialog
        const modalRoot = global.document.createElement('div');
        modalRoot.setAttribute('id', 'modal');
        const body = global.document.querySelector('body');
        body.appendChild(modalRoot);

        const mock = jest.fn();
        const {getByText, getByLabelText} = render(<AddUser onSubmit={mock}/>);

        fireEvent.change(getByLabelText(/Name/i), {target: {value: ""}});
        fireEvent.change(getByLabelText(/Age/i), {target: {value: "20"}});

        const submitButton = getByText(/submit/i);
        fireEvent.click(submitButton);

        expect(getByText("Action needed")).not.toBeNull();
        expect(mock).not.toBeCalled();
    });

    it('shows error if invalid age', () =>{
        // Create placeholder div for the createPortal render of the Modal dialog
        const modalRoot = global.document.createElement('div');
        modalRoot.setAttribute('id', 'modal');
        const body = global.document.querySelector('body');
        body.appendChild(modalRoot);

        const mock = jest.fn();
        const {getByText, getByLabelText} = render(<AddUser onSubmit={mock}/>);

        fireEvent.change(getByLabelText(/Name/i), {target: {value: "User"}});
        fireEvent.change(getByLabelText(/Age/i), {target: {value: ""}});

        const submitButton = getByText(/submit/i);
        fireEvent.click(submitButton);

        expect(getByText("Action needed")).not.toBeNull();
        expect(mock).not.toBeCalled();
    });

    it('shows error if invalid age - letters', () =>{
        // Create placeholder div for the createPortal render of the Modal dialog
        const modalRoot = global.document.createElement('div');
        modalRoot.setAttribute('id', 'modal');
        const body = global.document.querySelector('body');
        body.appendChild(modalRoot);

        const mock = jest.fn();
        const {getByText, getByLabelText} = render(<AddUser onSubmit={mock}/>);

        fireEvent.change(getByLabelText(/Name/i), {target: {value: "User"}});
        fireEvent.change(getByLabelText(/Age/i), {target: {value: "asdad"}});

        const submitButton = getByText(/submit/i);
        fireEvent.click(submitButton);

        expect(getByText("Action needed")).not.toBeNull();
        expect(mock).not.toBeCalled();
    });

    it('shows error if invalid age - less than 1', () =>{
        // Create placeholder div for the createPortal render of the Modal dialog
        const modalRoot = global.document.createElement('div');
        modalRoot.setAttribute('id', 'modal');
        const body = global.document.querySelector('body');
        body.appendChild(modalRoot);

        const mock = jest.fn();
        const {getByText, getByLabelText} = render(<AddUser onSubmit={mock}/>);

        fireEvent.change(getByLabelText(/Name/i), {target: {value: "User"}});
        fireEvent.change(getByLabelText(/Age/i), {target: {value: "0"}});

        const submitButton = getByText(/submit/i);
        fireEvent.click(submitButton);

        expect(getByText("Action needed")).not.toBeNull();
        expect(mock).not.toBeCalled();
    });

})