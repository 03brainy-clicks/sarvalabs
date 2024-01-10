import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./component/layout/Menu";
import Player from "./component/layout/Player";
import CategoriesList from "./component/lists/CategoriesList";
import FriendsList from "./component/lists/FriendsList";
import Artist from "./page/Artist";
import Home from "./page/Home";
import Navigation from "./component/layout/Navigation";

import { useState } from "react";

// Main App component representing the entire application
const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col relative ">
      {toggle && (
        <div className="absolute w-full h-full bg-white z-50 flex items-center justify-center">
          <div className="w-72">
            <h3 className="text-lg font-medium text-center">
              SarvaLabs Assessment
            </h3>
            <div className="flex gap-2 items-center mt-2">
              <div
                onClick={() => {
                  setToggle(!toggle);
                }}
                className="cursor-pointer transition duration-300 flex-1 py-2 px-5 text-xs font-medium bg-black hover:bg-gray-800 text-white rounded flex gap-1 items-center justify-center"
              >
                Demo
              </div>

              <a
                href="https://github.com/03brainy-clicks/sarvalabs/"
                target="_black"
                className="block w-1/2"
              >
                <div className="w-full transition duration-300 cursor-pointer flex-1 py-2 px-5 text-xs font-medium border border-black text-black  rounded flex gap-1 items-center justify-center">
                  Repo
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
      <div className="h-full w-full flex overflow-hidden">
        {/* Left sidebar */}
        <div className="min-w-44 bg-primary h-full px-2 py-4 md:flex flex-col hidden gap-4 ">
          <Menu />
          <div className="h-[1px] w-full bg-textSecondary opacity-20"></div>
          <CategoriesList />
        </div>
        {/* Main content */}
        <div className="flex-1 bg-secondary h-full space-y-4 overflow-hidden">
          <Router>
            <Routes>
              {/* Home and Artist pages */}
              <Route path="/" element={<Home />} />
              <Route path="/artist" element={<Artist />} />
            </Routes>
          </Router>
        </div>
        {/* Right sidebar */}
        <div className="min-w-44 bg-primary h-full  py-4 space-y-4 lg:block hidden px-1">
          <h5 className="text-sm font-bold text-textPrimary px-3 ">
            Friends Activity
          </h5>
          <FriendsList />
        </div>
      </div>
      {/* Player component for audio playback */}
      <Player />
      {/* Navigation component for menu and navigation small screen */}
      <Navigation />
    </div>
  );
};

export default App;
