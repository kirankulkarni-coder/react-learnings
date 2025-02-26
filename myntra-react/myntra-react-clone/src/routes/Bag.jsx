import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagItems from "../components/BagItems";
import "./Bag.css";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag.bag);
  console.log(bagItems);

  return (
    <>
      <div class="bag-page">
        {bagItems.map((item) => {
          return <BagItems item={item} />;
        })}
        <div class="bag-summary">{<BagItem bagItems={bagItems}></BagItem>}</div>
      </div>
    </>
  );
};

export default Bag;
