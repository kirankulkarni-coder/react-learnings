import styles from "./Button.module.css";

const Button = ({ name }) => {
  return (
    <button type="button" className={`btn btn-light ${styles.button}`}>
      {name}
    </button>
  );
};

export default Button;
