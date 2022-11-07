import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@components/Button';

import Container from './components/CounterContainer';
import Text from './components/CounterText';
import { decrement, getCount, increment } from './counterSlice';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(getCount);
    return (
        <Container>
            <Button down={'true'} onClick={() => dispatch(increment())} />
            <Text text={count} />
            <Button up={'true'} onClick={() => dispatch(decrement())} />
        </Container>
    );
};

export default Counter;
