const BagItem = ({ bagItems }) => {
  let totalMRP = 0;
  let finalPayment = 0;
  let totalDiscount = 0;
  let totalCurrentPrice = 0;
  const totalItem = bagItems.length;

  bagItems.map((item) => {
    totalMRP = totalMRP + item.original_price;
    totalCurrentPrice = totalCurrentPrice + item.current_price;
  });

  totalDiscount = totalMRP - totalCurrentPrice;
  finalPayment = totalMRP - totalDiscount + 99;

  return (
    <>
      <div class="bag-details-container">
        <div class="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div class="price-item">
          <span class="price-item-tag">Total MRP</span>
          <span class="price-item-value">₹{totalMRP}</span>
        </div>
        <div class="price-item">
          <span class="price-item-tag">Discount on MRP</span>
          <span class="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div class="price-item">
          <span class="price-item-tag">Convenience Fee</span>
          <span class="price-item-value">₹99</span>
        </div>
        <hr />
        <div class="price-footer">
          <span class="price-item-tag">Total Amount</span>
          <span class="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button class="btn-place-order">
        <div class="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
};

export default BagItem;
