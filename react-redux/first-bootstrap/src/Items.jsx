import Styles from "./Items.module.css";

function Items({ items }) {
  return items.map((item) => (
    <div className={`row ${Styles.items_container}`}>
      <div class="col-6">{item.task}</div>
      <div class="col-4">{item.date}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger button">
          Delete
        </button>
      </div>
    </div>
  ));
}

export default Items;
