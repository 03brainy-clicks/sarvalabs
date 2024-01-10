const SongCard = ({ song }) => {
  return (
    <div className="md:px-5 flex gap-2 items-center hover:bg-secondary02 rounded animate">
      <span className="text-sm text-textSecondary">{song.id}</span>
      <img src={song.image} alt="" className="w-12 h-12" />
      <span className="text-sm text-textPrimary">{song.song}</span>
      <div className="w-2/5 ml-auto flex items-center justify-between">
        <span className="text-sm text-textSecondary ">{song.plays}</span>
        <span className="text-sm text-textSecondary ">{song.time}</span>
      </div>
    </div>
  );
};

export default SongCard;
