import React from "react";
import Tickler from "./Tickler";
import MultiButton from "./MultiButton";
import ChangeItUp from "./ChangeItUp";
import Login from "./Login";


// Clickable component returns a button with a click event 
function Clickable ({ onClick}) {
  return <button onClick={onClick}>Click Me!</button>
};

function App() {
  //function that is passed to button click event
   function handleClick () {
     console.log("click")
   }

   // Calls clickable component
   return (
     <Clickable onClick={handleClick} />
  );

}

export default App;
