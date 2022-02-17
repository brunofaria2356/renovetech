import React from 'react';
import '../../assets/style/ComponentContactTwo.css';

import IconFem from '../../assets/icon/icons8-administrador-feminino-48.png';
import IconLinkedin from '../../assets/icon/icons8-linkedin-64.png';
import IconIntagram from '../../assets/icon/icons8-instagram-64.png';
import IconArrow from '../../assets/icon/icons8-seta-longa-à-direita-100.png';

function ComponentContactTwo() {

  const redirectInstagram = () => {
    window.open("https://www.instagram.com/brunofaria2356/");
  }

  const redirectLinkedin = () => {
    window.open("https://www.linkedin.com/in/bruno-faria-012a35192/");
  }

  return (
    <section className="containerContactTwo">
      <div className="containerWorkWith">
        <div className="containerImgWork">
          <img className="imgIconFem" src={IconFem} alt="IconFem" />
          <h2 className="titleWork">Quer trabalhar na RENOVE tech?</h2>
        </div>
        <button className="btnWork">Inscreva-se para nossas vagas!</button>
      </div>
      
      <div className="containerSocialMedia">
        <button
        onClick={redirectLinkedin}
        className="btnMedia">
          <img className="imgWork" src={IconLinkedin} alt="IconLinkedin" />
          Acesse nosso Linkedin
          <img className="iconArrow" src={IconArrow} alt="IconArrow"/>
        </button>
        <button
        onClick={redirectInstagram}
        className="btnMedia">
          <img className="imgWork" src={IconIntagram} alt="IconIntagram" />
          Acesse nosso Instagram
          <img className="iconArrow" src={IconArrow} alt="IconArrow"/>
        </button>
      </div>
    </section>
  )
}

export default ComponentContactTwo