import React, { useState } from 'react';

function Navbar() {
  const [selected, setSelected] = useState("inicial");

  return (
    <nav className="navbar">
      <a href="#inicial" className={selected === "inicial" ? "selected" : ""} onClick={() => setSelected("inicial")}>Inicial</a>
      <a href="#despesas" className={selected === "despesas" ? "selected" : ""} onClick={() => setSelected("despesas")}>Despesas</a>
      <a href="#investimentos" className={selected === "investimentos" ? "selected" : ""} onClick={() => setSelected("investimentos")}>Investimentos</a>
    </nav>
  );
}

export default Navbar;
