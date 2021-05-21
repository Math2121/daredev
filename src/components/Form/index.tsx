import React, { FormEvent, useState } from "react";
import { Container } from "./indesx";

export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    alert(`Nome:${name} \n\n Email:${email}`);
  }
  return (
    <Container onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="nome"
          placeholder="Digite seu nome"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email@example.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>

      <button>Enviar</button>
    </Container>
  );
}
