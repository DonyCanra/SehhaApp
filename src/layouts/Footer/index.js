import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row align-items-center flex-row-reverse">
          <div class="col-md-12 col-sm-12 text-center">
            Copyright © 2025 by <Link href=""> Dony Canra </Link> All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
