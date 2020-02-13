import React from "react";
import ativa from '../../images/ativa.png';


const Footer = () => (
<div class="footer">
              <div class="imagemFooter">
                <img src={ativa} alt="logo ativa"></img>
              </div>
              <div class="linksFooter">
                <h5 class="white-text">Links</h5>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/conta">Minha conta</a></li>
                    
                </ul>
              </div>
          </div>
          
);

export default Footer;