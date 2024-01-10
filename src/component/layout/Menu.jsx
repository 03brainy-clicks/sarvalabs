import Liked from "../../assets/icon/liked.svg";
import CreatePlaylist from "../../assets/icon/createPlaylist.svg";
import HomeIcon from "../../assets/icon/homeIcon.svg";
import Library from "../../assets/icon/library.svg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline/index";
const Menu = () => {
  return (
    <>
      <div className="text-textSecondary gap-1 text-xs font-bold leading-3 space-y-1">
        <div className="py-1 px-3  hover:bg-hover cursor-pointer rounded flex items-center gap-2 animate">
          <img src={HomeIcon} alt="" />
          Home
        </div>
        <div className="py-1 px-3  bg-secondary02 text-textPrimary rounded cursor-pointer flex items-center gap-2 animate">
          <MagnifyingGlassIcon className="w-4 h-4 " />
          Search
        </div>
        <div className="py-1 px-3 hover:bg-hover cursor-pointer rounded flex items-center gap-2 animate">
          <img src={Library} alt="" /> Your Library
        </div>
      </div>
      <div className="text-textSecondary gap-1 text-xs font-bold leading-3 space-y-1">
        <div className="py-1 px-3 cursor-pointer rounded hover:bg-hover flex items-center gap-2 animate">
          {" "}
          <img src={CreatePlaylist} alt="" />
          Create Playlist
        </div>
        <div className="py-1 px-3 cursor-pointer rounded hover:bg-hover flex items-center gap-2 ">
          <img src={Liked} alt="liked" /> Liked Songs
        </div>
      </div>
    </>
  );
};

export default Menu;
