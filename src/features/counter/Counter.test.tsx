import { render } from '../../testUtils';

const { screen, fireEvent } = require('@testing-library/react');
const React = require('react');
const { default: Counter } = require('./Counter');

test('it should render the counter', async () => {
    render(<Counter />);
    const text = screen.getByText('0');
    const button = screen.getByRole('button', { name: '⬆' });
    await fireEvent.click(button);
    expect(text.textContent).toBe('1');
});
