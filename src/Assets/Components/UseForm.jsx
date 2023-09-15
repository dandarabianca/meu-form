import React from "react";

export default function UseForm( {data, updateFieldHandler} ) {
  return (
    <div className="form-control">
      <label htmlFor="name">Nome:</label>
      <input
        type="text"
        name="text"
        id="name"
        placeholder="Digite seu nome"
        required
        value={data.name}
      />
      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          required
        />
      </div>
    </div>
  );
}
