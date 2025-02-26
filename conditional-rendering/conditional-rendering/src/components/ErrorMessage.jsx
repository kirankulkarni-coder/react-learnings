const ErrorMessage = (props) => {
  return props.foodItems.length === 0 && <h2>I am Hungry</h2>;
};

export default ErrorMessage;
