import React from 'react';
import '../../assets/style/ComponentJobsTwo.css';

function ComponentJobsTwo() {
  
  const redirectContact = () => {
    window.open("/contact", "_self");
  }
  
  return (
    <section className="containerJobsTwo">
      <h2 className="titleJobsTwo"> 
      Não encontrou nenhuma vaga? Envie seu CV mesmo assim! 
      </h2>
      <button onClick={redirectContact} className="btnJobsSubimid" type="button">
        ENVIAR AGORA
      </button>
    </section>
  )
}

export default ComponentJobsTwo