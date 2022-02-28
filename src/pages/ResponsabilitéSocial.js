import React from "react";
import Odds from "../components/odds";
import bank from "../images/bank.png";
import bank2 from "../images/bank2.jpg";
import "./Res.css";

const ResponsabilitéSocial = () => {
  return (
    <div>
      <section className="Par-in">
        <div className="img-desc">
          <div className="desc-">
            <h1 className="title-1"> Notre politique interne </h1>
            <p>
              {" "}
              Nous permettons à nos collaborateurs de grandir au sein de STB
              SICAR, aussi bien professionnellement que personnellement. Nous
              veillons à l’égalité entre tous et à l’accomplissement de chacun.
            </p>
          </div>

          <img src={bank} alt="loading" width="300px" className="img--" />
        </div>
      </section>
      <section className="Pol-in">
        <div className="img-desc">
          <img src={bank2} alt="loading" width="500px" className="img--" />
          <div className="desc--">
            <h1 className="title-1"> Pour nos participations </h1>
            <p>
              {" "}
              Nous sommes conscients de la nécessité de prendre en considération
              les critères environnementaux, sociaux et de qualité de
              gouvernance (ESG) dans la politique d’investissement. Ainsi, nous
              avons établi une charte ESG.   Nous sommes également très attachés
              à la qualité de l’approche et à la politique mise en œuvre par nos
              participations en ce qui concerne le respect de l’environnement et
              la gestion des ressources humaines. Pour ce faire, un
              questionnaire a été envoyé aux sociétés financées. Il s’appuie sur
              un socle commun comprenant des indicateurs quantitatifs portant
              sur les 3 grands thèmes ESG prioritaires de la STB SICAR.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h1 className="title-1"> Contribution ODD </h1>
        <div>
          <Odds />
        </div>
      </section>
    </div>
  );
};

export default ResponsabilitéSocial;
