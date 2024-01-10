// CategoryCard component to display information about a music category
const CategoryCard = ({ category }) => {
  // Inline style to set the background color based on the category color
  const cardStyle = {
    backgroundColor: category.color,
  };

  return (
    // Card container with styling classes, height, padding, and animation
    <div className="h-36 rounded p-3 px-4 relative overflow-hidden group animate cursor-pointer" style={cardStyle}>
      
      {/* Category name with larger font and bold styling */}
      <h3 className="text-xl font-bold text-textPrimary">{category.category}</h3>
      
      {/* Album image positioned absolutely, rotated and enlarged on hover */}
      <img src={category.album} alt="album" className="absolute w-20 h-20 -bottom-6 -right-6 rotate-45 group-hover:w-28 group-hover:h-28 animate" />
    </div>
  );
};

export default CategoryCard;
