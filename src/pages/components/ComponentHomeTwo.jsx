import React from 'react';
import '../../assets/style/ComponentHomeTwo.css';

function ComponentHomeTwo() {
  return (
    <section className="containerHomeTwo">
      <h2 className="componentHomeTowTitle">Por que ter a RENOVE tech como parceira?</h2>
      <div className="containerHomeArticle">
        <article className="containerHomeTwoCard">
          <h3 className="HomeTwoCardTitle">Agilidade no Desenvolvimento</h3>
          <p className="HomeTwoCardParagraph">Trabalhamos com metodologias ágeis e equipes multidisciplinares que contam com processos e ferramentas embarcadas e as skills necessárias.</p>
        </article>

        <article className="containerHomeTwoCard">
          <h3 className="HomeTwoCardTitle">Experiência e Conhecimento</h3>
          <p className="HomeTwoCardParagraph">Ao longo da nossa história, trabalhamos com diversos segmentos e desenvolvemos o know-how necessário para atuarnos mais diversificados projetos.</p>
        </article>

        <article className="containerHomeTwoCard">
          <h3 className="HomeTwoCardTitle">Qualidade e Alta Performance</h3>
          <p className="HomeTwoCardParagraph">Equipe qualificada com 100% de dedicação ao negócio, envolvendo os profissionais ideais com domínio nas melhores tecnologias disponíveis.</p>
        </article>
      </div>
    </section>
  )
}

export default ComponentHomeTwo;