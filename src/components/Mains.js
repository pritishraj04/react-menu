import React from "react";
import Input from "./Input";

export default function Mains({ meals }) {
  return (
    <section className="mains">
      {meals.map((meal, index) => (
        <article className="menu-item" key={index}>
          <img className="mains-image" alt={meal.alt} src={require("../img/place.png")} />
          <h3 className="mains-name">{meal.name}</h3>
          <Input type="mains" name={meal.name} index={index} />
          <strong className="mains-price">₹{meal.price}</strong>
          <p className="mains-description">{meal.description}</p>
        </article>
      ))}
    </section>
  );
}
