import React from 'react';

type Props = {
    text: string | number;
};
const CounterText = ({ text }: Props) => {
    return <span style={style}>{text}</span>;
};

const style = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#fad000',
};

export default CounterText;
