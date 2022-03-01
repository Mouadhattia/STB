import React from "react";
import Carousel from "react-elastic-carousel";
import MainLayout from "../../MainLayout/MainLayout";
import CustomCards from "../../Components/Cards/CustomCards";
import Cards from "../../Components/Cards/Cards";
import "./Home.css";
import investissment from "./investissment.png";
import acoompagnement from "./cart1.png";
import valeurs from "./cart2.png";
import aventure from "./cart3.png";
import colab from "./colab.png";
import part from "./part.png";

const Home = () => {
  const team = [
    {
      name: "Mohamed Metoui",
      descreption:
        "Possèdant 29 ans d’expérience professionnelle, il a commencé sa carrière dans le secteur bancaire dans la BDET avant de rejoindre le groupe STB où il a notamment été Directeur des Crédits aux PME.",
      img: "http://stbsicar.com.tn/assets/img/team/mohamedmetoui.jpg",
      role: "Directeur General",
    },
    {
      name: "Hajer Hannachi",
      descreption:
        "Ayant 10 ans d’expérience dans le Private Equity et 3 ans dans un cabinet d’expertise comptable. Elle a suivi une formation de Maîtrise en sciences comptables à la Faculté des Sciences Economiques et de gestion de TUNIS « FSEGT ».",
      img: "http://stbsicar.com.tn/assets/img/team/hajerhannachi.png",
      role: "Auditrice Interne",
    },
    {
      name: "Ines Mlika",
      descreption:
        "Riche d’une expérience de plus de 16 ans, elle assure aujourd’hui la coordination entre les différents services administratifs, comptables, financier et contentieux .",
      img: "http://stbsicar.com.tn/assets/img/team/inesmlika.jpg",
      role: "Responsable back office",
    },
    {
      name: "Anis Mlika",
      descreption:
        "Titulaire d’une maitrise en Droit des Entreprises, a intégré la STB SICAR en 2002 en tant que Responsable du Contentieux en charge notamment du suivi et de l’application des procédures des dossiers en phase contentieuse.",
      img: "http://stbsicar.com.tn/assets/img/team/anismlika.jpg",
      role: "Responsable Contentieux",
    },
    {
      name: "Radhia Haddad",
      descreption:
        "Titulaire d’une maitrise en Gestion, a rejoint la STB SICAR en 2002 où elle a exercé en tant que chargée d’affaires avant d’assurer les fonctions de responsable ressources humaines.",
      img: "http://stbsicar.com.tn/assets/img/team/radhiahaddad.jpg",
      role: "Responsable RH",
    },
    {
      name: "Dorra Chouchane",
      descreption:
        "Elle possède une expérience de plus de 18 ans dans le private equity. Elle est titulaire d’un diplôme de maitrise en sciences de gestion et d’un mastère en techniques bancaires.",
      img: "https://www.un.org/sites/un2.un.org/files/user.png",
      role: "Responsable Front Office",
    },
    {
      name: "Karim Aouadi",
      descreption:
        " Titulaire d’un diplôme de Maitrise en Méthode Quantitative Appliqué à l’Economie et à la Gestion et d’un diplôme d’études Supérieures de l’Institut Technique de Banque, il intervient depuis 16 ans dans le domaine du private equity et en charge notamment de la réalisation d’études financières et la mise en place optimale des participations de la STB SICAR.",
      img: "https://www.un.org/sites/un2.un.org/files/user.png",
      role: "Responsable Etudes et Mise en place",
    },
    {
      name: "Haifa Jebnoun",
      descreption:
        "Titulaire d’un diplôme en Marketing de l’ISG de Tunis, elle a rejoint la STB SICAR depuis 2001. Elle occupe actuellement le poste de Chargé Suivi Portofolio Management ayant comme principale mission l’élaboration de la politique de participation et de placement, la supervision de la gestion du portefeuille globale et le suivi des projets.",
      img: "http://stbsicar.com.tn/assets/img/team/haifajebnoun.png",
      role: "Responsable suivi du porte-feuille",
    },
    {
      name: "Sana Ben Nejma",
      descreption:
        "Titulaire d’un diplôme de maitrise en Informatique Appliquée à la Gestion et d’un diplôme en Gestion d’Actifs, elle possède une expérience de plus de 6 ans dans le domaine du private equity et occupe actuellement le poste de Chargée Gestion des Sorties ayant comme principale mission le suivi et le recouvrement des sorties programmées du portefeuille participations.",
      img: "http://stbsicar.com.tn/assets/img/team/sanabennejma.png",
      role: "Responsable gestion des sorties",
    },
  ];
  const cles = [
    {
      text1: "23ans",
      text2: "D'expérience",
      classname: "one",
    },
    {
      text1: "128MDT",
      text2: "Sous gestion",
      classname: "cle",
    },
    {
      text1: "300",
      text2: "Investissement en portefeulle",
      classname: "one",
    },
    {
      text1: "58",
      text2: "Fonds gérés",
      classname: "cle",
    },
    {
      text1: "91",
      text2: "Sorties integrales réalisées",
      classname: "one",
    },
    {
      text1: "24",
      text2: "Régions",
      classname: "cle",
    },
    {
      text1: "1750 emplois",
      text2: "créés durant les 5 derniéres années",
      classname: "one",
    },
  ];
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  const cardsdata = [
    {
      title: "Un Accompagnement",
      description:
        " Nous partageons la conviction que la valeur d’une PME repose sur la qualité de son équipe dirigeante. En tant qu’actionnaire, nous nous positionnons comme un partenaire actif aux côtés des dirigeants. Ainsi, nos critères d’investissement privilégient, au-delà de l‘analyse économique et industrielle de la société, la qualité et la motivation des dirigeants auxquels nous nous associons.",
    },
    {
      title: "Les Valeurs Qui Se Partagent",
      description:
        " Partager les valeurs de respect, de loyauté et de transparence pour poser ensemble les fondations d’un partenariat durable et constructif. Notre philosophie d'investissement est résolument non-intrusive », pour préserver la liberté d’action des dirigeants de l’entreprise. Ainsi, tous nos investissements s’effectuent en mode minoritaire, en fonds propres et quasi-fonds propres. Nous privilégions une durée moyenne de participation « raisonnable », comprise entre 5 et 7 ans.",
    },
    {
      title: "Une Aventue Humaine",
      description:
        "Chaque partenariat est une aventure riche d’expériences partagées et d’ambitions assumées.",
    },
  ].map((item, i) => ({ _id: "c-" + i, ...item }));
  const interdata = [
    { image: acoompagnement },
    { image: valeurs },
    { image: aventure },
  ];
  return (
    <>
      <MainLayout>
        <div className="nav-background">
          <div className="nav-cover-escription">
            <h1>Societe d'Investissement a Capital Risque</h1>
            <p>
              Fondée en 1998. Filiale du groupe STB. Spécialisée dans le private
              equity.
            </p>
            <small>Partner of your success</small>
          </div>
        </div>
        <div className="home__container">
          <div className="a_propos_de_nous">
            <h1 className="page-title">Nous Connaître</h1>
            <h3>Présentation STB SICAR</h3>
            <p className="page-description">
              La STB SICAR, filiale de la STB BANK, a été créée le 23 mars 1998.
              C'est une société d’investissement à capital risque qui a pour
              objectif la participation, pour son propre compte ou pour le
              compte de bailleurs de fonds au renforcement des opportunités
              d’investissement et des fonds propres des entreprises. Elle permet
              de procurer aux entreprises les fonds nécessaires à leur
              développement et à leur croissance avec obligation de sortie.
            </p>
          </div>
          <div className="cles">
            <h3>Nos chiffres clés :</h3>
            <div className="cles__container">
              <Carousel
                itemPadding={[10, 50]}
                enableAutoPlay
                autoPlaySpeed={1800}
                outerSpacing={100}
                breakPoints={breakPoints}
                pagination={false}
                showArrows={false}
              >
                {cles.map((cle) => (
                  <p className={cle.classname} style={cle.Style}>
                    {cle.text1} <br /> {cle.text2}
                  </p>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="principes__dinvestissement">
            <h3>Principes d’investissement</h3>
            <div className="Image-investissement">
              <img src={investissment} alt="investissement" width="100%" />
            </div>
          </div>
          <div className="modes__dintervention">
            <h3>Modes d’intervention</h3>
            <div className="page-cards-interventions">
              <Cards data={interdata} />
            </div>
          </div>
          <div className="etat__desprit">
            <h2>UN ÉTAT D'ESPRIT</h2>
            <h4 className="home-main-subtitles">
              Nous plaçons la confiance comme valeur fondamentale d’un
              partenariat gagnant
            </h4>
            <img src={colab} alt="" className="esp-img" />
            <CustomCards data={cardsdata} />
            <img src={part} alt="" className="esp-img" />
            <h4 className="home-main-subtitles">Notre valeur ajoutée</h4>
            <p className="page-description">
              L’accompagnement des participations est une pierre angulaire du
              positionnement de la STB SICAR et un marqueur fort de sa
              stratégie. Notre expérience montre qu’en apportant des ressources
              et des compétences complémentaires à celles des équipes
              dirigeantes, nous pouvons contribuer significativement à la
              création de valeur stratégique de l’entreprise, tant sur le plan
              économique que social.
            </p>
          </div>
          <div className="notre__equipe">
           
           <Carousel
             itemPadding={[10, 50]}
             enableAutoPlay
             autoPlaySpeed={1800}
             outerSpacing={100}
             breakPoints={breakPoints}
             pagination={false}
             showArrows={false}
           >
             {team.map((user) => (
               <div className="notre__equipe__item">
                 <div>
                  

                     <img src={user.img} alt="" />
                     <h2>{user.name}</h2>
                    
                   </div>
                   
                   <h4> {user.role}</h4>
                 
                

                 <h5 className="">{user.descreption}</h5>
               </div>
             ))}
           </Carousel>
         </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
