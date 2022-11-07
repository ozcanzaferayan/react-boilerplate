import React, { useState } from "react";
import Button from "@components/Button";
import Container from "./components/CounterContainer";
import Text from "./components/CounterText";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <Button down onClick={() => setCount(count - 1)} />
      <Text text={count} />
      <Button up onClick={() => setCount(count + 1)} />
    </Container>
  );
};

export default Counter;
