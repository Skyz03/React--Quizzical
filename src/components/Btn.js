// import React from "react";

// const Btn = (props) => {
//   const [hold, setHold] = React.useState(false);

//   function idIdentifier(id) {
//     console.log(props.id);
//     setHold((oldHold) => {
//       return (oldHold = !oldHold);
//     });
//   }

//   React.useEffect(() => {
//     if (hold === true) {
//       if (props.element === props.correct) {
//         console.log("correct");
//       }
//     }
//   }, [hold]);

//   return (
//     <button onClick={idIdentifier} className={hold ? "button__clicked" : ""}>
//       {props.element}
//     </button>
//   );
// };

// export default Btn;

// // coreect answer check here
// // check props.element === props.correct
