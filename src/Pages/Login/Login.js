import { useState } from "react";
import {  useHistory } from "react-router-dom";


import Logo from "../../assets/logo.png";
import { login } from "../../service/api";

import { Form, Container } from "./styles";

export default function Login() {
    const history = useHistory();
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function onSubmit() {
        if (userName.trim() === '') {
            return
        }
        if (email.trim() === '') {
            return
        }
        if (password.trim() === '') {
            return
        }
     
        if (!email || !password) {
            return alert('Precisa de senha ou email para continuar...')
          } else {
            try {
              const response = await login.post("/user", { email, password });
              login(response.data.token);
              history.push("/home");
            } catch (err) {
             return console.log(err)
            }
          }
        
    }

    return (
        <>
            <Container>
                <Form onSubmit={onSubmit}>
                    <img src={Logo} alt="Logo Rick and Morty" />
                  
                    <input
                        type="text"
                        placeholder="Nome de usuário"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Endereço de e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" >Login</button>
                    <hr />
                    {/* <Link to="/home">Fazer login</Link> */}
                </Form>
            </Container>

        </>
    )
}
