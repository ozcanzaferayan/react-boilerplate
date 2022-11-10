import { RenderOptions, render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/store';

// Import your store

type Props = {
    children: React.ReactNode;
};

const Wrapper = (props: Props) => (
    <Provider store={store}>{props.children}</Provider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
    render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
