// GenresCard component to display information about a music genre
const GenresCard = ({ genres }) => {
  // Inline style to set the background color based on the genre color
  const cardStyle = {
    backgroundColor: genres.color,
  };

  return (
    // Card container with styling classes, size, and animation
    <div
      className="rounded p-3 px-4  relative min-w-[20.8rem] h-40 overflow-hidden cursor-pointer group animate"
      style={cardStyle}
    >
      {/* Genre name with larger font, bold styling, and primary text color */}
      <h3 className="text-[2rem] font-bold text-textPrimary">{genres.genre}</h3>

      {/* Album image positioned absolutely, rotated and enlarged on hover */}
      <img
        src={genres.album}
        alt="album"
        className="absolute w-20 h-20 -bottom-6 -right-6 rotate-45 group-hover:w-32 group-hover:h-32 animate"
      />
    </div>
  );
};

export default GenresCard;
