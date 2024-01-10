// AlbumCard component to display information about an album
const AlbumCard = ({ album }) => {
  return (
    // Card container with styling classes
    <div className="min-w-[9.5rem] p-3 rounded bg-textPrimary bg-opacity-[.08] space-y-2 animate hover:bg-secondary02 cursor-pointer">
      {/* Album cover image */}
      <img src={album.album} alt="" className="rounded" />

      {/* Album details container */}
      <div>
        {/* Song title with a bold font, limited to one line */}
        <h2 className="text-sm font-bold text-textPrimary line-clamp-1">
          {album.song}
        </h2>

        {/* Genre with smaller font and different color */}
        <p className="text-xs text-textSecondary">{album.genre}</p>
      </div>
    </div>
  );
};

export default AlbumCard;
