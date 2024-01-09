import React from "react";

const GenresCard = ({ genres }) => {
  const cardStyle = {
    backgroundColor: genres.color,
  };

  return (
    <div className="rounded p-3 px-4  relative min-w-[20.8rem] h-40 overflow-hidden" style={cardStyle}>
      <h3 className="text-[2rem] font-bold text-textPrimary">{genres.genre}</h3>
      <img src={genres.album} alt="album" className="absolute w-20 h-20 -bottom-6 -right-6 rotate-45"/>
    </div>
  );
};

export default GenresCard;
