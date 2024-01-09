
const Menu = () => {
  return (
    <>
      <div className="text-textSecondary gap-1 text-xs font-bold leading-3 ">
        <div className="py-1 px-3 ">Home</div>
        <div className="py-1 px-3  bg-secondary02 text-textPrimary rounded">
          Search
        </div>
        <div className="py-1 px-3 ">Your Library</div>
      </div>
      <div className="text-textSecondary gap-1 text-xs font-bold leading-3 ">
        <div className="py-1 px-3">Create Playlist</div>
        <div className="py-1 px-3">Liked Songs</div>
      </div>
    </>
  );
};

export default Menu;
