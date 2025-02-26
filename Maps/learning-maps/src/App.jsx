function App() {
  let HealthyFoods = ["Dal", "Roti", "Green Vegetables", "Butter", "Milk"];

  return (
    <ul className="list-group">
      <li className="list-group-item">A Simple Healthy Food List</li>

      {HealthyFoods.map((item) => (
        <li key={item} className="list-group-item list-group-item-primary">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default App;
