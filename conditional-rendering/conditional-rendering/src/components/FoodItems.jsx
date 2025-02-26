import Items from "./Items";
import Container from "./Container";
import { useState } from "react";

const FoodItems = ({ foodItems }) => {
  let [activeItemList, setActiveItem] = useState(foodItems);

  const onClickHandler = (clickedItem) => {
    let newFoodItems = [...activeItemList];
    newFoodItems.map((item) => {
      if (item.item == clickedItem) {
        item.active = true;
      }
    });
    setActiveItem(newFoodItems);
  };

  return (
    <>
      <Container>
        <ul className="list-group">
          <li className="list-group-item">A Simple Healthy Food List</li>
          {activeItemList.map((item) => (
            <>
              <Items
                key={item}
                foodItem={item}
                onClickHandler={() => onClickHandler(item.item)}
              ></Items>
            </>
          ))}
        </ul>
      </Container>

      {/* <Container>
        <p>
          These are the best foods for you for the health and well being. Enjoy
          it everyday!!! Thank me later
        </p>
      </Container> */}
    </>
  );
};

export default FoodItems;
