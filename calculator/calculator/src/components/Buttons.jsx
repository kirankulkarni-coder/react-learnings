import Button from "./Button";
import styles from "./Buttons.module.css";

const Buttons = ({ keys }) => {
  return (
    <div className={styles.buttons_container}>
      {keys.map((item) => (
        <Button name={item}></Button>
      ))}
    </div>
  );
};

export default Buttons;
