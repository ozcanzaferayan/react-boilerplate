import { render } from '../../testUtils';
import Posts from './Posts';

const { screen } = require('@testing-library/react');
const React = require('react');

test('it should render the posts', async () => {
    await render(<Posts />);
    const imageElements = await screen.findAllByRole('img');
    expect(imageElements.length).toBe(3);
});
