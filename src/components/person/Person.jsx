import React, { useEffect, useState } from "react";
import { getTotal, removeFromCart, setData } from "../../utilities/localDB";
import "./Person.css";

const Person = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPersons(data));
  }, []);

  const addToCart = (id) => {
    setData(id);
  };
  //   get total
  const totalPrice = getTotal(persons);
  return (
    <div>
      <h2>You need- "{totalPrice}" Tk to buy all products</h2>
      {persons.map((person) => {
        return (
          <div key={person._id} className="container">
            <img src={person.picture} alt="" />
            <h2>{person.name}</h2>
            <p>{person.price} Tk</p>
            <p>{person.phone}</p>
            <button
              onClick={() => {
                addToCart(person._id);
              }}
            >
              Add to Cart
            </button>
            <button
              onClick={() => {
                removeFromCart(person._id);
              }}
            >
              Remove from cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Person;
