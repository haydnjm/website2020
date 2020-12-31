import React, { useState, useEffect, useRef } from "react";

const Counter: React.FC<{ i: number }> = ({ i }) => {
  const [count, setCount] = useState(0);

  const savedCallback = useRef<any>();

  function callback() {
    setCount(count + 1);
  }

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, 500);
    return () => clearInterval(id);
  }, []);

  return (
    <p>
      Counter {i}: {count}
    </p>
  );
};

const IntervalTest: React.FC = () => {
  const [ctrs, setCtrs] = useState<number[]>([]);
  const [i, setI] = useState(1);

  const savedCallback = useRef<any>();

  function callback() {
    setCtrs([...ctrs, i]);
    setI(i + 1);
  }

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {ctrs.map((ctr) => (
        <Counter i={ctr} key={ctr} />
      ))}
    </>
  );
};

export default IntervalTest;
