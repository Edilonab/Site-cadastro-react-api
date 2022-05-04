import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, ConteudoForm, ConteudoTitulo, Titulo, BotaoAcao, ButtonInfo, AlertSuccess, AlertDanger, Form, Label, Input, ButtonSuccess } from './styles';

export const Cadastrar = () => {

  const [produto, setProduto] = useState({
    titulo: '',
    descricao: ''
  });

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })

  const valorInput = e => setProduto({ ...produto, [e.target.name]: e.target.value });

  const cadProduto = async e => {
    e.preventDefault();
    //console.log(produto.titulo);

    await fetch("http://localhost/celke/cadastrar.php", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ produto })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson)
        if (responseJson.erro) {
          setStatus({
            type: 'erro',
            mensagem: responseJson.messagem
          });
        } else {
          setStatus({
            type: 'success',
            mensagem: responseJson.messagem
          });
        }
      }).catch(() => {
        setStatus({
          type: 'erro',
          mensagem: 'Produto não cadastro com sucesso, tente mais tarde!'
        });
      });
  }

  return (
    <Container>
      <ConteudoForm>
        <ConteudoTitulo>
          <Titulo>Cadastrar</Titulo>
          <BotaoAcao>
            <Link to="/">
              <ButtonInfo>Listar</ButtonInfo>
            </Link>
          </BotaoAcao>
        </ConteudoTitulo>

        {status.type === 'erro' ? <AlertDanger>{status.mensagem}</AlertDanger> : ""}
        {status.type === 'success' ? <AlertSuccess>{status.mensagem}</AlertSuccess> : ""}

        <Form onSubmit={cadProduto}>
          <Label>Nome </Label>
          <Input type="text" name="titulo" placeholder="Fulano Beltrano de Oliveira da Silva" onChange={valorInput} /><br /><br />

          <Label>E-mail </Label>
          <Input type="text" name="descricao" placeholder="fulnobos@gmail.com" onChange={valorInput} /><br /><br />

          <Label>Nascimento </Label>
          <Input type="text" name="descricao" placeholder="13/10/1995" onChange={valorInput} /><br /><br />

          <Label>Telefone </Label>
          <Input type="num" name="descricao" placeholder="(31) 9 9666-1111" onChange={valorInput} /><br /><br />

          <ButtonSuccess type="submit">Cadastrar</ButtonSuccess>

        </Form>
      </ConteudoForm>
    </Container>
  );
}
