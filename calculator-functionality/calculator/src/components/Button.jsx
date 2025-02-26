import styles from "./Button.module.css";

const Button = ({ name, onKeyDownPress }) => {
  return (
    <button
      type="button"
      onClick={onKeyDownPress}
      className={`btn btn-light ${styles.button}`}
    >
      {name}
    </button>
  );
};

export default Button;
