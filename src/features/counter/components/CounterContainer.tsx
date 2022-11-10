import React from 'react';

type Props = {
    children: React.ReactNode;
};
const CounterContainer = (props: Props) => {
    return <div style={style}> {props.children}</div>;
};

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    gap: '2rem',
};

export default CounterContainer;
