import React, { useState } from "react";
import "./Responsabilte.css";

const Contribution = ({ el }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="grid-layout">
      <div className="visisble">
        <h4 className="odd-title">{el.title} </h4>
        <img src={el.img} alt="img" />
        <p className="grid-description">{el.desc1}</p>
      </div>
      <div>
        {show ? (
          <p id="hidden" className="grid-description">
            {el.desc2}
          </p>
        ) : null}
        <div className="btn-container">
          <button id="btnA" onClick={() => setShow(true)}>
            Afficher
          </button>
          <button id="btnM" onClick={() => setShow(false)}>
            Masquer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contribution;
