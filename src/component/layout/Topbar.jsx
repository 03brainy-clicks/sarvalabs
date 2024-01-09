import Forward from "../../assets/icon/forward.svg";
import Back from "../../assets/icon/back.svg";
import MagGlass from "../../assets/icon/magGlass.svg";
import Dropdown from "../../assets/icon/dropdown.svg";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className=" py-3 flex gap-6 sm:px-7 px-4">
      <div className="flex gap-3 items-center">
       <Link to={"/"}> <img src={Back} alt="back" /></Link>
       <Link to={"/artist"}> <img src={Forward} alt="forward" /></Link>
      </div>
      <div className="bg-white flex gap-2 py-[0.375rem] px-2 rounded-full w-60 items-center">
        <img src={MagGlass} alt="mag" className="w-3 h-3" />
        <input
          type="text"
          placeholder="Artists, songs or podcasts"
          className="text-[0.625rem] w-full placeholder:text-[#777777] flex-1 outline-none"
        />
      </div>
      <div className="flex gap-1 items-center ml-auto">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="avatar"
          className="md:w-4 md:h-4 h-6 w-6 rounded-full"
        />
        <div className="md:flex gap-1 items-center hidden">
          <span className="text-[0.625rem] text-textPrimary">Cody Fisher</span>
          <img src={Dropdown} alt="dropdown" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
