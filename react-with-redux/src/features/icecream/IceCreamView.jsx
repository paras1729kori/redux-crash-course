import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IceCreamView = () => {
  const numOfIceCreams = useSelector((state) => state.icecream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of icecreams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered(1))}>Order icecream</button>
      <button onClick={() => dispatch(restocked(5))}>Restock icecreans</button>
    </div>
  );
};

export default IceCreamView;
