import React, { useState } from "react";

import LoginForm from "./components/LoginForm";

import "./index.css"

export default function App() {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault();

    if (name === "admin" && password === "1234"){
      alert(`Bem-vindo, ${name}! Login feito com sucesso.`)
    } else {
      alert("Usuário ou senha incorretos,")
    }
  }

  return (
    
    <div className="app-container"> 
      
      <LoginForm 
        name={name} 
        setName={setName} 
        password={password} 
        setPassword={setPassword} 
        handleLogin={handleLogin} 
      />

      <div style={{ marginTop: "20px", color: "#666" }}>
        <p>Digitando Nome: {name}</p>
        <p>Digitando Senha: {password}</p>
      </div>
    </div>
  );
}