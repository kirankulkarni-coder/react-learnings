import styles from "./Calculator.module.css";
import Display from "./Display";
import Buttons from "./Buttons";
import { useState } from "react";

const Calculator = ({ keys }) => {
  let [calvalue, setCalValue] = useState("");
  const calculateExpression = (item) => {
    if (item == "=") {
      setCalValue(eval(calvalue));
    } else if (item == "C") {
      setCalValue("");
    } else {
      setCalValue(calvalue + item);
    }
    console.log(item);
  };

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <Display value={calvalue}></Display>
        <Buttons
          onKeyDownPress={(item) => calculateExpression(item)}
          keys={keys}
        ></Buttons>
      </div>
    </div>
  );
};

export default Calculator;
