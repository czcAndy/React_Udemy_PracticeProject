import { fireEvent, getByTestId, getByText, render } from "@testing-library/react";
import ModalWindow from "./ModalWindow"

describe('<ModalWindow>', () => {
    beforeEach(() => {
        const modalRoot = global.document.createElement('div');
        modalRoot.setAttribute('id', 'modal');
        const body = global.document.querySelector('body');
        body.appendChild(modalRoot);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders', () => {
        render(<ModalWindow open={true}/>, global.document.getElementById('modal'));
        expect(global.document.getElementById('modal').childElementCount).not.toEqual(0);
    });

    it('is hidden', () => {
        render(<ModalWindow open={false}/>, global.document.getElementById('modal'));
        expect(global.document.getElementById('modal').childElementCount).toEqual(0);
    });

    it('shows the correct message', () => {
        const {getByText} = render(<ModalWindow open={true} message='Test'/>,);
        const test = getByText(/^Test$/);
        expect(test).not.toBeNull();
    });

    it('delegates closing the popup', () => {
        const mock = jest.fn();
        const {getByTitle} = render(<ModalWindow open={true} onClose={mock} message='Test'></ModalWindow>);
        const background = getByTitle('modal-background');

        fireEvent.click(background);
        expect(mock).toBeCalled();
    });
})