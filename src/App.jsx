import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./component/layout/Menu";
import Player from "./component/layout/Player";
import CategoriesList from "./component/lists/CategoriesList";
import FriendsList from "./component/lists/FriendsList";
import Artist from "./page/Artist";
import Home from "./page/Home";
import Navigation from "./component/layout/Navigation";

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
        <div className="min-w-44 bg-primary h-full py-4 space-y-4 lg:block hidden">
          <h5 className="text-sm font-bold text-textPrimary px-3 ">
            Friends Activity
          </h5>
          <FriendsList />
        </div>
      </div>
      <Player />
      <Navigation/>
    </div>
  );
};

export default App;
