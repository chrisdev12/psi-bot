import { useState, useEffect } from 'react';
import ChildReactive from './child';

const parentReactive = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log('render parent');

    return () => {};
  }, []);
  const updatecount = () => {
    let num = count + 1;
    setcount(num);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={updatecount}>update count</button>
      <ChildReactive count={count} />
    </>
  );
};

export default parentReactive;
