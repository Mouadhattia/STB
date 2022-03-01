import React from "react";
import nosFond_img1 from "./img/nosFond_img1.png";
import nosFond_img2 from "./img/nosFond-img2.png";
import nosFond_img3 from "./img/nosFond-img3.png";
import nosFond_img4 from "./img/nosFond-img4.png";
import Carousel from "react-elastic-carousel";
import MainLayout from "../../MainLayout/MainLayout";
import HeaderBackground from "../../Components/HeaderBackground/HeaderBackground";
import "./NosFond.css";

const NosFond = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  const Fondsimgs = [nosFond_img1, nosFond_img2, nosFond_img3, nosFond_img4];
  return (
    <>
      <MainLayout>
        <HeaderBackground />
        <div className="nosFonds">
          <h1 className="page-title">NOS FONDS</h1>
          <div className="nosFond-container-1">
            <h3>1-NOS INVESTISSEURS</h3>
            <p className="page-description">
              {" "}
              STB SICAR dispose de fonds apportés par des investisseurs
              institutionnels de premier plan.
            </p>
            <div className="image-nosFond-first">
              <Carousel
                itemPadding={[10, 50]}
                enableAutoPlay
                autoPlaySpeed={1800}
                outerSpacing={100}
                breakPoints={breakPoints}
                pagination={false}
                showArrows={false}
              >
                {Fondsimgs.map((img) => (
                  <img className="Fonds__img" src={img} alt="img" />
                ))}
              </Carousel>
            </div>
          </div>
          <div className="nosFond-container-2">
            <h3>2-OPTIMISEZ VOTRE FISCALITE</h3>
            <p className="page-description">
              Les investisseurs qui désirent optimiser leur fiscalité peuvent
              confier tout ou partie de leurs bénéfices imposables à la STB
              SICAR sous forme de fonds géré.
            </p>
            <p className="page-description">
              {" "}
              La règlementation en vigueur leur permet d’opter pour l’un des
              schémas suivants :
            </p>
            <div className="nos-fonds-card-container">
              <div className="image-nosFond-second">
                <div className="fond__card__container">
                  <h4 className="home-main-subtitles">
                    100% des revenus ou bénéfices imbosable sans minumum d'impot
                  </h4>
                  <div className="card__subcontainer">
                    <p>
                      Deduction totale sur la base d'un engagement de la STB
                      SICAR d'employer 75% de mentant déposés dans des ZDR ou
                      aricole
                    </p>
                  </div>
                </div>
                <div className="fond__card__container">
                  <h4 className="home-main-subtitles">
                    {" "}
                    35% des revenus ou bénéfices imbosable sans minumum d'impot
                  </h4>
                  <div className="card__subcontainer">
                    <p>
                      Deduction de revenues ou beneficies reinvestis aupres de
                      la STB SICAR, sur la base d'un engagement d'emploi de 65%
                      dans des projets definis par la reglementation
                    </p>
                  </div>
                </div>
              </div>
              {/* <img
                className="image_nosFond_second2"
                src={image_nosFond_second2}
              ></img> */}
            </div>

            <div className="nosFond-delai">
              <h3>Délai </h3>
              <p className="page-description">
                Les investisseurs bénéficient de l’avantage fiscal l’année de
                libération du fonds.
              </p>
              <p className="page-description">
                Néanmoins l’obligation d’utilisation des montants déposés est de
                2 ans à partir de l’année de libération.
              </p>
            </div>
            <div className="nosFond-blockage">
              <h3>Blocage des fonds</h3>
              <p className="page-description">
                Le fonds géré est bloqué auprès de la{" "}
                <strong>STB SICAR </strong> pendant cinq ans à partir du 1er
                janvier de l’année qui suit celle du dépôt des fonds.
              </p>
            </div>
            <div className="nosFond-remuniration">
              <h3>Blocage des fonds</h3>
              <p className="page-description">
                Le bailleur de fonds bénéficiera également conformément à la
                convention Fonds géré :
              </p>
              <div className="nosFond-remuniration-div">
                <p className="page-description">
                  - De la rémunération des fonds à des conditions très
                  avantageuses jusqu’à leur utipsation dans des projets ayant
                  obtenu au préalable son accord de participation
                </p>
                <p className="page-description">
                  - Du produit des intérêts des OCA/CCA souscrits
                </p>
                <p className="page-description">
                  - Des revenus du portefeuille d’investissement
                </p>
                <p className="page-description">- Des dividendes distribués</p>
              </div>
            </div>
            <div className="nosFond_autre_avantage">
              <h3>Autre avantage</h3>
              <p className="page-description">
                Est déductible du bénéfice imposable, la plus-value de cession
                d’actions et des parts sociales réalisées.{" "}
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default NosFond;
