import styles from "./InputText.module.css";

const InputText = ({ onChangeHandler }) => {
  return (
    <input
      onKeyDown={onChangeHandler}
      type="text"
      class={styles.input_text}
    ></input>
  );
};

export default InputText;
