import React from "react";
import ReactDOM from 'react-dom';
import { Row, Col } from 'react-materialize';
import '../home/investimento.jsx';


const Home = () => (
  <Row>   
    <Col m={12} s={8}>
      <div class="intro">
        <h1>Fundos de Investimento</h1>
        <h2>Invista em fundos e diversifique seus investimentos rentabilizando 
            ainda mais a sua carteira. Selecionamos os melhores fundos de diversas 
            categorias de acordo com o seu perfil de investimentos. Compare, escolha e 
            invista no melhor fundo para você.</h2>
      </div>
    
      <table id='investimentos'>
        <thead>
          <th>nome</th>
          <th>CNPJ</th>
          <th>investimento minimo</th>
        </thead>
        <tbody></tbody>
      </table>      
    </Col>
  </Row>
);

export default Home;

