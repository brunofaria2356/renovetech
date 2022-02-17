import React, {useState} from 'react';
import '../../assets/style/ComponentJobsOne.css';


function ComponentJobsOne() {
  const [element, setElement] = useState();

  function handleChangeSelect(event) {
      if (event.target.value === "Front-end") {
      setElement(
        <div className="containerJobs">
          <div className="containerJob">
            <h2 className="titleJob">{event.target.value} Developer</h2>
            <p className="paragraphJob">
              { `Requisitos:
                HTML,
                CSS,
                JAVASCRIPT,
                REACT`
              }
            </p>
          </div>
        </div>);
      } if (event.target.value === "Back-end") {
        setElement(
          <div className="containerJobs">
            <div className="containerJob">
              <h2 className="titleJob">{event.target.value} Developer</h2>
              <p className="paragraphJob">
                { `Requisitos:
                  Docker,
                  Node.js,
                  JAVASCRIPT,
                  MySql`
                }
              </p>
            </div>
          </div>);
      } if (event.target.value === "Full-stack") {
        setElement(
          <div className="containerJobs">
            <div className="containerJob">
              <h2 className="titleJob">{event.target.value} Developer</h2>
              <p className="paragraphJob">
                { `Requisitos:
                  HTML,
                  CSS
                  JAVASCRIPT,
                  Docker,
                  Node.js,
                  MySql`
                }
              </p>
            </div>
          </div>);
      }
  }

  return (
    <section className="containerJobsOne">
      <label htmlFor='selectJobs' className="JobsOne">
        Área:
        <select defaultValue="" className="selectJobs" name="selectJobs" id="selectJobs" onChange={handleChangeSelect}>
          <option value="" disabled >Selecione a categoria</option>
          <option value="Front-end">Desenvolvedor Front-end</option>
          <option value="Back-end" >Desenvolvedor Back-end</option>
          <option value="Full-stack" >Desenvolvedor Full-stack</option>
        </select>
      </label>
      {element}
    </section>
  )
}

export default ComponentJobsOne;
