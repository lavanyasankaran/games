import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map(ro => (
        <Card key={ro.Rank} Name={ro.Name} Platform={ro.Platform} />
      ))}
    </div>
  );
};

export default CardList;
