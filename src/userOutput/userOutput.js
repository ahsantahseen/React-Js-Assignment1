import React from "react";

const Comp2 = (props) => {
  return (
    <div style={props.style}>
      <p>usernamme:{props.username}</p>
      <p>Hello I am to be changed</p>
    </div>
  );
};

export default Comp2;
