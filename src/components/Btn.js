import React from "react";

const Btn = (props) => {
  const [hold, setHold] = React.useState(false);

  function idIdentifier(id) {
    console.log(props.id);
    setHold((oldHold) => {
      return (oldHold = !oldHold);
    });
  }
  return (
    <button onClick={idIdentifier} className={hold ? "button__clicked" : ""}>
      {props.element}
    </button>
  );
};

export default Btn;

// coreect answer check here
// check props.element === props.correct
