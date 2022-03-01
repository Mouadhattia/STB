import React from "react";

function GeoscanFeature({ data = [] }) {
  return (
    <>
      <div className="FeatContainer">
        {data.map(({ _id, image, description, pictureFirst = false }) => (
          <div key={_id} className="ImageDiv">
            {!pictureFirst && image && (
              <img src={image} className="FeatImage" alt="" />
            )}
            <div className="FeatDescription">{description}</div>
            {pictureFirst && image && (
              <img src={image} className="FeatImage" alt="" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default GeoscanFeature;
