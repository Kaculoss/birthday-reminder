import React from "react";

function Birthday(props) {
  const { image, name, age } = props;
  return (
    <div className="birthday-info">
      <img src={image} alt="unKnown" />
      <div className="birthday-info-strings">
        <h2>{name}</h2>
        <h4>{age} years</h4>
      </div>
    </div>
  );
}

export default Birthday;
