import React from "react";
import "./Header.css";

const Header = props => {
    return (
      <div className="headCont" key="">
        <h2>{props.title}</h2>
        <p>Photo of the Day {props.date}</p>
      </div>
    );
};

export default Header;