import React from "react";

const Navbar = (props) => {
  return (
    <header className="App-header">
      <h2>{props.title}</h2>
    </header>
  );
};

export default Navbar;