import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);

  return <p class="lead mb-4">{counter}</p>;
};

export default DisplayCounter;
