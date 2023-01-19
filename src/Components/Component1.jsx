import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";

const Component1 = () => {
  const type = useSelector((state) => state.counter.value);

  return (
    <>
      <div>
        <h1>Component1 ------------ {type}</h1>
      </div>
    </>
  );
};

export default Component1;
