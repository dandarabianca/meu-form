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
        value={data.name || ""}
        onChange={(e) => updateFieldHandler("name", e.target.value)}
      />
      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          required
          value={data.email || ""}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="tell">Telefone:</label>
        <input
        type="tell"
        name="tell"
        id="tell"
        placeholder="Digite seu número"
        required
        value={data.tell}
        onChange={(e) => updateFieldHandler("tell", e.target.value)}
        />
      </div>
    </div>
  );
}
