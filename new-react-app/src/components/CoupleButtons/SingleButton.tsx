// import { useState } from 'react';
import { MouseEventHandler } from 'react'

interface SingleButtonProps {
  count: number,
  onClick: MouseEventHandler
}

export default function SingleButton({ onClick, count }: SingleButtonProps) {
  // const [count, setCount] = useState(0);

  // function handleClick() {
  //   setCount(count + 1);
  // }

  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}