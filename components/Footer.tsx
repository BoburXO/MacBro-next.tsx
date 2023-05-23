import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="container">
        <ul>
          <p>Интернет-магазины MacBro.uz. Все права защищены.</p>
          <p>
            Developed by{" "}
            <Link target={"_blank"}
              href="https://boburkhatamov.netlify.app/"
              style={{ color: "#007bff" }}
            >
              BoburKhatamov
            </Link>
          </p>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
