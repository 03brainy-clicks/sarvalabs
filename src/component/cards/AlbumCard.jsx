const AlbumCard = ({ album }) => {
  return (
    <div className="min-w-[9.5rem] p-3 rounded bg-textPrimary bg-opacity-[.08] space-y-2 animate hover:bg-secondary02 cursor-pointer">
      <img src={album.album} alt="" className="rounded" />
      <div>
        <h2 className="text-sm font-bold text-textPrimary line-clamp-1">
          {album.song}
        </h2>
        <p className="text-xs text-textSecondary">{album.genre}</p>
      </div>
    </div>
  );
};

export default AlbumCard;
