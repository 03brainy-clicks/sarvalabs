import { HeartIcon, PlusCircleIcon } from "@heroicons/react/24/outline/index";
import { PlayIcon } from "@heroicons/react/24/solid/index";
import ScreenSmall from "../../assets/icon/smallScreen.svg";
import Screen from "../../assets/icon/screen.svg";
import Speaker from "../../assets/icon/speaker.svg";
import FullScreen from "../../assets/icon/fullScreen.svg";
import Suffle from "../../assets/icon/shuffle.svg";
import Previous from "../../assets/icon/previous.svg";
import Next from "../../assets/icon/next.svg";
import Repeat from "../../assets/icon/repeat.svg";

const Player = () => {
  return (
    <>
      <div className=" bg-secondary w-full px-3  md:py-4 py-4  flex items-center justify-between border-t  border-[#535353]">
        <div className="flex gap-2 items-center ">
          <img
            src="src/assets/albums/lounge.png"
            alt="song"
            className="w-12 h-12 "
          />
          <div>
            <p className="text-xs text-textPrimary">I Don&apos;t Know</p>
            <p className="text-[.5rem] text-textSecondary">Currently</p>
          </div>
          <HeartIcon className="w-3 h-3 text-textSecondary" />
        </div>
        <div className="md:block hidden">
          <div className="flex items-center justify-center gap-3 mb-3">
            <img src={Suffle} alt="" className="w-4 h-4" />
            <img src={Previous} alt="" className="w-4 h-4" />
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-white">
              <PlayIcon className="w-4 h-4" />
            </div>
            <img src={Next} alt="" className="w-4 h-4" />
            <img src={Repeat} alt="" className="w-4 h-4" />
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-[.625rem] leading-3 text-textSecondary">
              1:00
            </span>
            <div className="h-1 lg:w-[30rem] w-72 rounded-full bg-[#777]">
              <div className="rounded-full h-full w-1/4 bg-[#b2b2b2]"></div>
            </div>
            <span className="text-[.625rem] leading-3 text-textSecondary">
              4:00
            </span>
          </div>
        </div>
        <div className="md:flex gap-2 items-center hidden">
          <img src={ScreenSmall} alt="screen small" />
          <img src={Screen} alt="screen" />
          <img src={Speaker} alt="speaker" />
          <div className=" w-16 h-1 rounded-full bg-[#777]">
            <div className="w-2/3 rounded-full bg-[#b2b2b2] h-full"></div>
          </div>
          <img src={FullScreen} alt="full screen" />
        </div>
        <div className="flex md:hidden gap-2 items-center">
          <img src={Screen} alt="screen small" className="w-5 h-5" />
          <PlusCircleIcon className="w-5 h-5 text-textSecondary" />
          <PlayIcon className="w-5 h-5 text-textPrimary" />
        </div>
      </div>
      <div className="h-[.200rem] w-full rounded-full bg-[#777]">
        <div className="rounded-full h-full w-1/4 bg-[#b2b2b2]"></div>
      </div>
    </>
  );
};

export default Player;
