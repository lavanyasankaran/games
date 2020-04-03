import React from "react";

const Card = ({ Name, Platform }) => {
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
      <div>
        <h2>{Name}</h2>
        <p>{Platform}</p>
      </div>
    </div>
  );
};

export default Card;
