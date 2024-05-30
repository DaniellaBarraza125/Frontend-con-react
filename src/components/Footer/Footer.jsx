import "./Footer.scss";
import React from 'react';

const Footer = () => {
  return (
    <div className="footerContainer">
      <footer className="footerDiv">
        <div className="navFooterDiv">
          <button>Home</button>
          <button>Products</button>
          <button>Cart</button>
          <button>Profile</button>
        </div>
        <div className="socialNetworksDivs"> 
          <p>Follow us:</p>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/900px-Instagram_icon.png?20200512141346" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/900px-Facebook_logo_%28square%29.png" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/450px-X_logo_2023.svg.png" alt="Twitter" />
          </a>
        </div>
        <div>
          <div>
            © 2024 SUPERDANI <br />
            Made in Valencia, ES
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
