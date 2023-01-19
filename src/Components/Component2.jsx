import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";

const Component2 = () => {
  const type1 = useSelector((state) => state.user.value);

  return (
    <>
      <div>
        <h1>Component2 ------------ {type1}</h1>
      </div>
    </>
  );
};

export default Component2;
