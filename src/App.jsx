import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./component/layout/Menu";
import Player from "./component/layout/Player";
import CategoriesList from "./component/lists/CategoriesList";
import FriendsList from "./component/lists/FriendsList";
import Artist from "./page/Artist";
import Home from "./page/Home";
import {
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline/index";
import HomeIcon from "./assets/icon/homeIcon.svg";
import Library from "./assets/icon/library.svg";

const App = () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col ">
      <div className="h-full w-full flex overflow-hidden">
        {/* left sidebar  */}
        <div className="min-w-44 bg-primary h-full px-2 py-4 md:flex flex-col hidden gap-4 ">
          <Menu />
          <div className="h-[1px] w-full bg-textSecondary opacity-20"></div>
          <CategoriesList />
        </div>
        {/* main */}
        <div className="flex-1 bg-secondary h-full space-y-4 overflow-hidden">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/artist" element={<Artist />} />
            </Routes>
          </Router>
        </div>
        {/* right sidebar */}
        <div className="min-w-44 bg-primary h-full px-2 py-4 space-y-4 lg:block hidden">
          <h5 className="text-sm font-bold text-textPrimary px-1 ">
            Friends Activity
          </h5>
          <FriendsList />
        </div>
      </div>
      <Player />
      <div className="menu p-5 bg-secondary md:hidden flex sm:justify-center justify-between sm:gap-20 ">
        <div className=" text-textSecondary cursor-pointer">
          <img src={HomeIcon} className="w-5 h-5  mx-auto " alt="home" />
          <p className="text-[.5rem] text-center ">Home</p>
        </div>
        <div className=" text-textPrimary cursor-pointer">
          <MagnifyingGlassIcon className="w-5 h-5  mx-auto " />
          <p className="text-[.5rem] text-center ">Search</p>
        </div>
        <div className=" text-textSecondary cursor-pointer">
          <img src={Library} className="w-5 h-5  mx-auto" alt="library" />
          <p className="text-[.5rem] text-center ">Library</p>
        </div>
        <div className=" text-textSecondary cursor-pointer">
          <UserIcon className="w-5 h-5  mx-auto" />
          <p className="text-[.5rem] text-center ">Profile</p>
        </div>
      </div>
    </div>
  );
};

export default App;
