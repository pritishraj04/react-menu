import React, { useContext, useState } from "react";
import { Context } from "../Context";

export default function Input({ type, name, index }) {
  const [items, updateItem] = useContext(Context);
  // const [count, setCount] = useState(0);

  // const minus = () => {
  //   if (count > 0) {
  //     setCount(count - 1)
  //   } else {
  //     setCount(count)
  //   }
  // }
  // const plus = () => {
  //     setCount(count + 1)
  // }

  return (
    <>
    {/* <button onClick={minus} className="minus">-</button> */}
    <input
      type="text"
      inputMode="numeric"
      pattern="[0-9]*"
      onChange={({ target }) => updateItem(type, index, target.value)}
      name={name.replace(" ", "-").toLowerCase()}
      placeholder=" "
    />	
    {/* <button onClick={plus} className="plus">+</button> */}
    </>
  );
}
