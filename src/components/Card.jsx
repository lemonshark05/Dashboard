import React from 'react';

const Card = ({title, content}) => {
  return (
    <div className="Card">
      <h1 className="number">{title}</h1>
      <h2>{content}</h2>
    </div>
  );
};

export default Card;
