import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@components/button/Button';

import Container from './components/CounterContainer';
import Text from './components/CounterText';
import { decrement, getCount, increment } from './counterSlice';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(getCount);
    return (
        <Container>
            <Button onClick={() => dispatch(decrement())}>⬇</Button>
            <Text text={count} />
            <Button onClick={() => dispatch(increment())}>⬆</Button>
        </Container>
    );
};

export default Counter;
