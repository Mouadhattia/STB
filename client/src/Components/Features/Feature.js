import React from "react";
import { Link } from "react-router-dom";
import "../../Pages/NosRealisations/NosRealisations.css";

function GeoscanFeature({ data = [] }) {
  return (
    <>
      {data.map(
        ({ _id, image, title, description, link, pictureFirst = false }) => (
          <div className="FeatureContainer" key={_id}>
            <h4 className="home-main-subtitles">{title}</h4>

            <div className="ImageDiv">
              {!pictureFirst && image && (
                <img src={image} className="FeatImage" alt="" />
              )}
              <div className="FeatDescription">
                <p>{description}</p>
                <button className="featButton">
                  <Link to={link} className="linkFeat">
                    Savoir plus
                  </Link>
                </button>
              </div>
              {pictureFirst && image && (
                <img src={image} className="FeatImage" alt="" />
              )}
            </div>
          </div>
        )
      )}
    </>
  );
}

export default GeoscanFeature;
