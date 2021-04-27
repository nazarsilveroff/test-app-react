import React from "react";
const Heder = () => {
  return (
    <header>
      <a href="/">SHOP</a>
      <nav>
        <ul className="list">
          <li className="lisItem">
            <a href="/home" className="link">
              Home
            </a>
          </li>
          <li className="lisItem">
            <a href="/products" className="link">
              Products
            </a>
          </li>
          <li className="lisItem">
            <a href="/Aadmin" className="link">
              ADMIN
            </a>
          </li>
          <li className="lisItem">
            <a href="/registration" className="link">
              Registration
            </a>
          </li>
          <li className="lisItem">
            <a href="/login" className="link">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Heder;
