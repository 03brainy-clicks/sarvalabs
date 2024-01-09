import Cross from "../../assets/icon/cross.svg";

const ArtistCard = ({ name, image }) => {
  return (
    <div className="p-3 relative rounded bg-textPrimary bg-opacity-[.08] space-y-3 min-w-[9.5rem]">
      <img src={Cross} alt="cross" className="absolute top-1 right-1" />
      <img src={image} alt="artist" className="w-32 h-32 rounded-full" />
      <div>
        <h5 className="text-sm font-bold text-textPrimary pb-1 leading-4">{name}</h5>
        <p className="text-xs text-textSecondary leading-3">Artist</p>
      </div>
    </div>
  );
};

export default ArtistCard;
