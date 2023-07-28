import { useState } from "react";
import "./App.css";
import { Trash, Plus } from "@phosphor-icons/react";
import AddFruitModal from "./components/AddFruitModal";

function App() {
  const [fruits, setFruits] = useState([
    { name: "Banana", color: "yellow", price: 2 },
    { name: "Cherry", color: "red", price: 3 },
    { name: "Strawberry", color: "red", price: 4 },
  ]);
  const [open, setOpen] = useState(false);

  const deleteFruit = (fruit) => {
    setFruits((previous) =>
      previous.filter((thisFruit) => thisFruit.name !== fruit.name)
    );
  };

  const totalPrice = fruits.reduce(
    (totalPrice, currentFruit) => totalPrice + currentFruit.price,
    0
  );

  return (
    <>
      <AddFruitModal
        onOpen={open}
        onSetFruits={setFruits}
        onSetOpen={setOpen}
      />
      <div className="container">
        <h2>Fruit List</h2>
        <div className="button-direction">
          <button onClick={() => setOpen(!open)}>
            Add Fruit <Plus size={12} />
          </button>
        </div>
        {fruits.map((fruit, id) => (
          <div key={id} className="fruit-item">
            <span>{fruit.name}</span>
            <span
              className="delete-fruit"
              aria-hidden
              onClick={() => deleteFruit(fruit)}
            >
              <Trash size={20} />
            </span>
          </div>
        ))}
        <div className="price">
          <span>Preço Total:</span>
          <span>R${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </>
  );
}

export default App;
