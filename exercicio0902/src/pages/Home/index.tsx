import React, { useRef, useState } from 'react';
import { Redirect } from 'react-router-dom'

const Home  = () => {

    const [nome] = useState('vitor')
    const [senha] = useState('12345')
    const [logado, setLogado] = useState(false)
    let inputNome = useRef <HTMLInputElement>(null)
    let inputSenha = useRef <HTMLInputElement>(null)
const enviarForm = () => {

    const NomeFormulario = inputNome.current?.value
    const SenhaFormulario = inputSenha.current?.value

    if (NomeFormulario == nome && SenhaFormulario == senha){
        setLogado(true)
    }
    console.log('Entrou');
    
    
}
  return (
    <div>
      
        { logado  ? <Redirect to="/entrar" />
      
      : 
      <ul>
      Nome do usuário:
        <input type="text" ref={inputNome}/>
        Senha:
        <input type="text" ref={inputSenha}/>
        <button onClick={enviarForm}>Entrar</button>
      </ul>
      
        }
    </div>
  );
}

export default Home;