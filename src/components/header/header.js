import React from "react";
import {Col} from 'react-materialize';
import ativa from '../../images/ativa.png';


const Header = () => (
      
    <Col m={12} s={8}>
      <nav>
        <div class="nav-wrapper">
          <a href="/" class="brand-logo"><img src={ativa} alt="logo ativa" /></a>
          <ul class="">
            <li><a href="/conta">Minha conta</a></li>
          </ul>
        </div>
      </nav>
      
    </Col>

);

export default Header;