import React from "react";

const ErrorCard = ({ message }) => {
  return (
    <div className="weather-card border margin-10 padding-10">
      <h3>{message}</h3>
    </div>
  );
};

export default ErrorCard;
