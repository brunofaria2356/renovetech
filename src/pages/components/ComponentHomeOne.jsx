import React from 'react';
import ImgOne from '../../assets/img/ecommerce-image-400x400@2x.webp';
import '../../assets/style/ComponentHomeOne.css';

function ComponentHomeOne() {
  return (
    <section className="containerComponentOne">
      <img className="imgComponentOne" src={ImgOne} alt="Imagem 1" />
      <div className="containerParagraphComponentOne">
        <p className="paragraphComponentOne">
          Disponibilizamos todas as skills necessárias para entender a dor do negócio, desenvolver e sustentar produtos digitais do zero. Somos um caldo cultural que ferve talento técnico atualizado, visão de negócio,agilidade e altíssima performance.
        </p>
        <p className="paragraphComponentOne">
        A RENOVE TECH é um habilitador digital 360° que te apoia no ciclo completo do projeto. Contamos com profissionais capacitados e qualificados para um desenvolvimento com qualidade.
        </p>
      </div>
    </section>
  )
}

export default ComponentHomeOne