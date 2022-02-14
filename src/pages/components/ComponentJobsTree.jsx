import React from 'react';
import '../../assets/style/ComponentJobsTree.css';

import ImgIdeia from '../../assets/icon/icons8-ideia-64.png';
import ImgLike from '../../assets/icon/icons8-gosto-disso-64.png';
import ImgModoDev from '../../assets/icon/icons8-modo-de-desenvolvedor-64.png';
import ImgCrowd from '../../assets/icon/icons8-multidão-64.png';

function ComponentJobsTree() {
  return (
    <section className="containerJobsTree">
      <h2 className="titleJobsTree">
        O que valorizamos
      </h2>
      <div className="containerCardsJobsTree">

        <div className="cardJobsTree">
          <img className="imgJobsTree" src={ImgIdeia} alt="ImgIdeia" />
          <p  className="paragraphJobsTree">
            Fazer soluções <strong>fora da casinha</strong> , para que possamos mudar a vida de muitas pessoas todos os dias!
          </p>
        </div>

        <div className="cardJobsTree">
          <img className="imgJobsTree" src={ImgLike} alt="ImgLike" />
          <p  className="paragraphJobsTree">
            Proporcionar <strong>qualidade de vida</strong>  e espaço para realizar sonhos profissionais e pessoais!
          </p>
        </div>

        <div className="cardJobsTree">
          <img className="imgJobsTree" src={ImgModoDev} alt="ImgModoDev" />
          <p  className="paragraphJobsTree">
            Buscamos pessoas boas, com vontade <strong>aprender e ensinar</strong>  para somar nosso time!
          </p>
        </div>

        <div className="cardJobsTree">
          <img className="imgJobsTree" src={ImgCrowd} alt="ImgCrowd" />
          <p  className="paragraphJobsTree">
            Nossa maior satisfação é <strong>criar relações de respeito mútuo</strong>  entre nosso time e clientes
          </p>
        </div>

      </div>
    </section>
  )
}

export default ComponentJobsTree