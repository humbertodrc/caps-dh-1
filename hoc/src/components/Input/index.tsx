import React, { FC } from "react";

const Input: FC = ({ handleSubmit, handleChange }: any) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="number"
          onChange={handleChange}
          placeholder="Digite um número"
        />
        <button type="submit">Buscar personagem</button>
      </label>
    </form>
  );
};

export default Input;
