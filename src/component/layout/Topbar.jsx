import Forward from "../../assets/icon/forward.svg";
import Back from "../../assets/icon/back.svg";
import MagGlass from "../../assets/icon/magGlass.svg";
import Dropdown from "../../assets/icon/dropdown.svg";

const Topbar = () => {
  return (
    <div className=" py-3 flex gap-6 px-7">
      <div className="flex gap-3 items-center">
        <img src={Back} alt="back" />
        <img src={Forward} alt="forward" />
      </div>
      <div className="bg-white flex gap-2 py-[0.375rem] px-2 rounded-full w-60 items-center">
        <img src={MagGlass} alt="mag" className="w-3 h-3" />
        <input
          type="text"
          placeholder="Artists, songs or podcasts"
          className="text-[0.625rem] placeholder:text-[#777777] flex-1 outline-none"
        />
      </div>
      <div className="flex gap-1 items-center ml-auto">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="avatar"
          className="w-4 h-4 rounded-full"
        />
        <div className="flex gap-1 items-center">
          <span className="text-[0.625rem] text-textPrimary">Cody Fisher</span>
          <img src={Dropdown} alt="dropdown" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
