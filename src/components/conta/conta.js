// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col } from 'react-materialize';
import './transacoes.jsx';
// Importando o componenet UserProfile


const conta = () => (
  <Row>          
    <Col s={12} m={12}>
      <table id='transacoes'>
        <thead>
          <th>nome</th>
          <th>data da Operacao</th>
          <th>tipo de Operacao</th>
          <th>valor investimento</th>
          <th>resgatar</th>
        </thead>
        <tbody></tbody>
      </table>   
    </Col>
  </Row>
);

export default conta;