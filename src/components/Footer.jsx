import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p style={{color: "black"}}>Copyright ⓒ {year}| Abhisekh Yadav</p>
    </footer>
  );
}

export default Footer;
