import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {Container, ConteudoTitulo, BotaoAcao, ButtonSuccess, Table, Titulo} from './styles';

export const Home = () => {

  const [data, setData] = useState([]);

  const getProdutos = async () => {
    fetch("http://localhost/Projeto/formulario-react-api-php/back-end/index.php")
    .then((response) => response.json())
    .then((responseJson) => (
      //console.log(responseJson),
      setData(responseJson.records)
    ));
  }

  useEffect(() => {
    getProdutos();
  },[])

  return (
    <Container>
      <ConteudoTitulo>
        <Titulo>LISTA DE CADRASTRO</Titulo>
       //* <BotaoAcao>
         // <Link to="/cadastrar">
         //   <ButtonSuccess>Cadastrar</ButtonSuccess>
          //</Link>
       // </BotaoAcao>*/
      </ConteudoTitulo>
      
      
      <Table>
        <thead>
          <tr>
            <th>NOME</th>
            <th>E-MAIL</th>
            <th>NASCIMENTO</th>
            <th>TELEFONE</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map(produto => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.titulo}</td>
              <td>{produto.descricao}</td>
              <td>Visualizar Editar Apagar</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
  
    
}
