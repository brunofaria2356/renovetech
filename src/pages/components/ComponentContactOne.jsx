import React, {useState} from 'react';
import ImgForms from '../../assets/img/business-3d-new-jump-man-1.png';
import '../../assets/style/ComponentContactOne.css';

function ComponentContactOne() {
  const [name, setName] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [file, setFile ] = useState();
  const [mensage, setMensage] = useState();

  function handleForms(e) {
    const element = e.target.id;
    if(element === "name") {
      setName(e.target.value);
    } if(element === "contact") {
      setContact(e.target.value);
    } if(element === "email") {
      setEmail(e.target.value);
    } if(element === "file") {
      setFile(e.target.value);
    } if(element === "mensage") {
      setMensage(e.target.value);
    }
  }

  // action="/submit" method="POST"
  return (
    <>
      <section className="containerContact">
        <div className="containerInfos">
          <h2 className="titleContact">
            Fale com a gente!
          </h2>
          <hr className="hr"/>
          <p className="paragraphContact">
            Basta preencher o formulário e em breve nosso time entrará em contato.
          </p>
          <img className="imgContact" src={ImgForms} alt="ImgForms" />
        </div>
        <div className="containerForms">

          <form className="formsContact" action="/" method="GET">
            <label className="label" htmlFor="name">
              <p><i className="span">* </i>Nome:</p>
              <input required onChange={handleForms} className="input" type="text" name="name" id="name" value={name}/>
            </label>

            <label className="label" htmlFor="contact">
              <p><i className="span">* </i>Contato:</p>
              <input required onChange={handleForms} className="input" type="text" name="contact" id="contact" value={contact}/>
            </label>

            <label className="label" htmlFor="email">
              <p><i className="span">* </i>E-mail:</p>
              <input required onChange={handleForms} className="input" type="text" name="email" id="email" value={email}/>
            </label>

            <label className="label" htmlFor="file">
              Anexo:
              <input onChange={handleForms} className="inputFile" type="file" name="file" id="file" accept=".pdf" value={file}/>
            </label>

            <label className="label" htmlFor="mensage">
              Mensagem:
              <textarea onChange={handleForms} className="input textArea" cols="30" rows="10" name="mensage" id="mensage" value={mensage}></textarea>
            </label>

            <button className="btnSubmit" type="submit">Enviar</button>
          </form>

        </div>
      </section>
    </>
  )
}

export default ComponentContactOne