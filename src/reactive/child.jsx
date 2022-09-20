import { useEffect } from 'react';

const childReact = ({ count }) => {
  useEffect(() => {
    console.log('render child');

    return () => {};
  }, []);

  return <h2>Hello child {count}</h2>;
};

export default childReact;
