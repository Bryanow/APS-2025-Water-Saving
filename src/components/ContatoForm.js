import React from 'react';

const ContatoForm = () => {
  return (
    <form>
      <label htmlFor="nome">Nome:</label>
      <input type="text" id="nome" name="nome" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="mensagem">Mensagem:</label>
      <textarea id="mensagem" name="mensagem" rows="4" required></textarea>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContatoForm;
