import Cross from "../../assets/icon/cross.svg";
import Play from "../../assets/icon/play.svg";

// ArtistCard component to display information about an artist
const ArtistCard = ({ name, image }) => {
  return (
    // Card container with styling classes
    <div className="group p-3 relative rounded bg-textPrimary bg-opacity-[.08] space-y-3 min-w-[9.5rem] hover:bg-secondary02 animate cursor-pointer">
      {/* Close (cross) icon */}
      <img src={Cross} alt="cross" className="absolute top-1 right-1" />

      {/* Play icon (initially hidden, visible on hover) */}
      <img
        src={Play}
        alt=""
        className="cursor-pointer absolute right-2 top-1/2 group-hover:opacity-100 opacity-0 -translate-y-3 animate"
      />

      {/* Artist image */}
      <img src={image} alt="artist" className="w-32 h-32 rounded-full" />

      {/* Artist details container */}
      <div>
        {/* Artist name with bold font and line spacing */}
        <h5 className="text-sm font-bold text-textPrimary pb-1 leading-4">
          {name}
        </h5>

        {/* Role indication with smaller font and line spacing */}
        <p className="text-xs text-textSecondary leading-3">Artist</p>
      </div>
    </div>
  );
};

export default ArtistCard;
