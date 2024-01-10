import Forward from "../../assets/icon/forward.svg";
import Back from "../../assets/icon/back.svg";
import MagGlass from "../../assets/icon/magGlass.svg";
import Dropdown from "../../assets/icon/dropdown.svg";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className=" py-3 flex gap-6 sm:px-7 px-4 items-center">
      <div className="flex gap-3 items-center">
        <Link to={"/"}>
          {" "}
          <img src={Back} alt="back" className="w-6 h-6" />
        </Link>
        <Link to={"/artist"}>
          {" "}
          <img src={Forward} alt="forward" className="w-6 h-6" />
        </Link>
      </div>
      <div className="bg-white flex gap-2 py-[0.375rem] px-3 rounded-full w-60 items-center">
        <img src={MagGlass} alt="mag" className="w-3 h-3" />
        <input
          type="text"
          placeholder="Artists, songs or podcasts"
          className="text-[0.625rem] py-1  w-full placeholder:text-[#777777] flex-1 outline-none"
        />
      </div>
      <div className="flex gap-1 items-center ml-auto cursor-pointer md:bg-primary rounded-full md:p-1 md:px-2">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="avatar"
          className="md:w-6 md:h-6 h-7 w-7 rounded-full"
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
