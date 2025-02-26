import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bag = useSelector((state) => state.bag.bag);

  const elementFound =
    bag.some((bagItem) => bagItem.id == item.id) > 0 ? true : false;
  console.log(elementFound);

  const addToBag = (item) => {
    console.log(item);
    dispatch(bagActions.addToBag(item));
  };

  const removeFromBag = (item) => {
    console.log(item);
    dispatch(bagActions.removeFromBag(item));
  };

  return (
    <div class="item-container">
      <img class="item-image" src={item.image} alt="item image" />
      <div class="rating">
        ${item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div class="company-name">{item.company}</div>
      <div class="item-name">{item.item_name}</div>
      <div class="price">
        <span class="current-price">Rs {item.current_price}</span>
        <span class="original-price">Rs {item.original_price}</span>
        <span class="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {!elementFound ? (
        <button class="btn-add-bag" onClick={() => addToBag(item)}>
          Add to Bag
        </button>
      ) : (
        <button class="btn-add-bag" onClick={() => removeFromBag(item)}>
          Remove
        </button>
      )}
    </div>
  );
};

export default HomeItem;
