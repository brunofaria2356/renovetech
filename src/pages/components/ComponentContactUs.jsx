import React from 'react';
import '../../assets/style/ComponentContactUs.css';
import ImgMessage from '../../assets/icon/icons8-mensagens-30.png'

function ComponentContactUs() {

  const redirectContact = () => {
    window.open("/contact", "_self");
  }
  
  return (
    <section className="containerContactUs">
      <h2 className="ContactUsTitle">
      Coloque seu negócio em um próximo nível, e deixe a gente te ajudar
      </h2>
      <button onClick={redirectContact} className="ContactUsButton" type="button">
        <img className="ContactUsMessage" src={ ImgMessage } alt="ImgMessage" />
        Fale Conosco
      </button>
    </section>
  )
}

export default ComponentContactUs;