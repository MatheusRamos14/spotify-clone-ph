import React from "react";

import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import {
  Container,
  Header,
  Logo,
  Form,
  Fields,
  RegisterLink,
} from './styles'

import loginBG from '../../assets/images/loginbg.png';
import logo from '../../assets/images/logo-spotify.png';

export function Login() {
  return (
    <Container>
      <Header source={loginBG}>
        <Logo source={logo} />
      </Header>

      <Form>
        <Fields>
          <Input
            placeholder="E-mail"
          />
          <Input
            placeholder="Password"
          />
        </Fields>

        <Button
          title="Entrar"
        />
      </Form>

      <RegisterLink>Criar conta</RegisterLink>
    </Container>
  );
}