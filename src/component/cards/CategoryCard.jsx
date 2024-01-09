import React from "react";

const CategoryCard = ({ category }) => {
  const cardStyle = {
    backgroundColor: category.color,
  };

  return (
    <div className="h-36 rounded p-3 px-4 relative overflow-hidden" style={cardStyle}>
      <h3 className="text-xl font-bold text-textPrimary">{category.category}</h3>
      <img src={category.album} alt="album" className="absolute w-20 h-20 -bottom-6 -right-6 rotate-45"/>
    </div>
  );
};

export default CategoryCard;