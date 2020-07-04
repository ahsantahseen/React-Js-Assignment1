import React from "react";

const Comp1 = (props) => {
  return (
    <div>
      <input style={props.style} onChange={props.nameChange} value={props.username}></input>
    </div>
  );
};
export default Comp1;
