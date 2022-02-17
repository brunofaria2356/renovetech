import React from 'react'
import '../../assets/style/Footer.css'
import IconInstagram from '../../assets/icon/icons8-instagram-64.png';
import IconLinkedin from '../../assets/icon/icons8-linkedin-64.png';
import IconWhatsApp from '../../assets/icon/icons8-whatsapp-64.png';


const redirectInstagram = () => {
  window.open("https://www.instagram.com/brunofaria2356/");
}

const redirectLinkedin = () => {
  window.open("https://www.linkedin.com/in/bruno-faria-012a35192/");
}

const redirectWhatsApp = () => {
  window.open("https://api.whatsapp.com/send?1=pt_BR&phone=5534988587835");
}


function Footer() {
  return (
    <footer className="containerFooter">
      <h2 className="FooterTitle">
        NOSSAS REDES SOCIAIS
      </h2>
      <div className="ContainerFooterButtons">
        <button
        className="footerButton"
        onClick={redirectInstagram}
        type="button">
          <img className="pointer" src={IconInstagram} alt="IconInstagram" />
        </button>
        <button
        className="footerButton"
        onClick={redirectLinkedin}
        type="button">
          <img className="pointer" src={IconLinkedin} alt="IconLinkedin" />
        </button>
        <button
        className="footerButton"
        onClick={redirectWhatsApp}
        type="button">
          <img className="pointer" src={IconWhatsApp} alt="IconWhatsApp" />
        </button>
      </div>
      <p className="FooterParagraph">Aplicação desenvolvida por Bruno Faria - Copyright © 2021 RENOVE tech. Todos os direitos reservados</p>
    </footer>
  )
}

export default Footer;