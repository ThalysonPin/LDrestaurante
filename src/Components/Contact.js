import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Ficou Com Alguma Dúvida?</h1>
      <h1 className="primary-heading">Nós Podemos Ajudar</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="nossoemail@email.com" />
        <button className="secondary-button">Enviar</button>
      </div>
    </div>
  );
};

export default Contact;
