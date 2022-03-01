import React from "react";
import HeaderBackground from "../../Components/HeaderBackground/HeaderBackground";
import MainLayout from "../../MainLayout/MainLayout";
import RealisationFeature from "../../Components/Features/Feature";
import "./NosRealisations.css";

import rea1 from "./realisation1.jpg";
import rea2 from "./realisation2.png";
import rea3 from "./realisation3.jpg";

const realisationsdata = [
  {
    title: "Devenez propriataire de votre propre maison",
    description: (
      <>
        <p>
          La STB Bank met à votre disposition le crédit MASKEN AWAL 🏡 , qui
          vous fait bénéficier d’un financement à 100% de votre bien immobilier.
        </p>
        <p>
          La banque finance les investissements initiaux matériels ou
          immatériels ou de toute activité de production de biens ou de
          services, à l’exception des activités de Tourisme dont la composante
          principale est l’hébergement et de la Promotion immobilière destinée à
          l’habitation.
        </p>
      </>
    ),
    image: rea1,
    link: "/",
    pictureFirst: false,
  },
  {
    title:
      "La Société tunisienne de banque (STB Bank) a tenu, le jeudi 29 avril 2021, en visioconférence la deuxième année consecutive, depuis l’amphithéatre de la STB Finance à la Cité des Sciences de Tunis, ses asssemblées générales ordinaire relatives à l’exercice 2020.",
    description: (
      <>
        <p>
          {" "}
          Cette première assemblée après la fin du contrat-programme 2016-2020
          révèle des réalisations conformes aus prévisions retenues dans ce
          contrat, avec, notament, un résultat net de 72,2 milions de dinars
          tunisiens (MDT), en tenant compte.
        </p>
        <p>
          L’exercice a été bouclé avec, également, un produit net bancaire de
          625,6 MDT, troisième du secteur avec un taux de croissance moyen le
          plus élevé sur les cinq dernières années; un encours de crédits
          octroyés de 9 080 MDT, en progression de 14,6% des dépots de la
          clientèle, ayant dépassé le seuil des 8 milliards de dinars pour la
          première fois et s’établissant à 8442 MDT ; des capitaux propres
          passant à 1 100 MDT a fin 2020 avec une évolution de 5.3% par rapport
          à 2019.
        </p>
      </>
    ),
    image: rea2,
    link: "/",
    pictureFirst: true,
  },
  {
    title:
      "La BCT a lancé en 2020, sa “Sandbox réglementaire” pour tester les innovations technologiques dans le domaine bancaire et financier.",
    description: (
      <>
        <p>
          TLedger, une startup fintech tunisienne labellisée Startup Act
          spécialisée dans les paiements, a été sélectionnée par la BCT dans le
          cadre de la première cohorte de la sandbox réglementaire pour mener
          des tests avec des clients volontaires en vue d’expérimenter un Proof
          of Concept (PoC) sur la “Monnaie Digitale de La Banque Centrale” (MDBC
          ou CBDC).
        </p>
        <p>
          Cette expérimentation est conduite dans le but d’identifier comment
          les technologies innovantes pourraient améliorer l’efficacité et la
          fluidité des systèmes de paiement et des infrastructures financières,
          pour un meilleur secteur financier au service d’une économie
          inclusive.
        </p>
      </>
    ),
    image: rea3,
    link: "/",
    pictureFirst: false,
  },
];

const NosRealisations = () => {
  return (
    <>
      <MainLayout>
        <HeaderBackground />
        <h1 className="page-title">Nos Réalisations</h1>
        <RealisationFeature data={realisationsdata} />
      </MainLayout>
    </>
  );
};

export default NosRealisations;
