import { X, Plus } from "@phosphor-icons/react";
import PropTypes from "prop-types";
import { useState } from "react";

const AddFruitModal = ({ onSetFruits, onOpen, onSetOpen }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "color":
        setColor(value);
        break;
      case "price":
        setPrice(Number(value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSetFruits((previous) => [...previous, {name, color, price}]);
    onSetOpen(!onOpen)
  };

  return (
    <dialog open={onOpen} className="container">
      <div
        className="button-direction"
        aria-hidden
        onClick={() => onSetOpen(!onOpen)}
      >
        <X size={20} className="close" />
      </div>
      <form onSubmit={handleSubmit} className="form">
        <h3>Add a new fruit</h3>
        <label htmlFor="name" className="label">
          Insert fruit name here:
        </label>
        <input type="text" name="name" className="input" onChange={handleChange} />
        <label htmlFor="color" className="label">
          Insert color here:
        </label>
        <input type="text" name="color" className="input" onChange={handleChange} />
        <label htmlFor="price" className="label">
          Insert price here:
        </label>
        <input type="text" name="price" className="input" onChange={handleChange} />
        <div className="button-form">
          <button type="submit">
            Add Fruit <Plus size={12} />
          </button>
        </div>
      </form>
    </dialog>
  );
};
AddFruitModal.propTypes = {
  onOpen: PropTypes.bool.isRequired,
  onSetFruits: PropTypes.func.isRequired,
  onSetOpen: PropTypes.func.isRequired,
};
export default AddFruitModal;
