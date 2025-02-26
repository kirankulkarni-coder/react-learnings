import styles from "./Calculator.module.css";
import Display from "./Display";
import Buttons from "./Buttons";

const Calculator = ({ keys }) => {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <Buttons keys={keys}></Buttons>
    </div>
  );
};

export default Calculator;
