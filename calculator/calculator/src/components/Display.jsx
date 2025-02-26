import styles from "./Display.module.css";

const Display = () => {
  return (
    <div className={`input-group input-group-lg ${styles.input_text}`}>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
      />
    </div>
  );
};

export default Display;
