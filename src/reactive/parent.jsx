import ChildReactive from './child';

const parentReactive = () => {
  return (
    <>
      <h1>Hello parent</h1>
      <ChildReactive />
    </>
  );
};

export default parentReactive;
