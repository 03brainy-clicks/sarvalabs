import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./component/layout/Menu";
import Player from "./component/layout/Player";
import CategoriesList from "./component/lists/CategoriesList";
import FriendsList from "./component/lists/FriendsList";
import Artist from "./page/Artist";
import Home from "./page/Home";

const App = () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col">
      <div className="h-full w-full flex overflow-hidden">
        {/* left sidebar  */}
        <div className="min-w-44 bg-primary h-full px-2 py-4 flex flex-col gap-4 ">
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
        <div className="min-w-44 bg-primary h-full px-2 py-4 space-y-4">
          <h5 className="text-sm font-bold text-textPrimary px-1 ">
            Friends Activity
          </h5>
          <FriendsList />
        </div>
      </div>
      <Player />
    </div>
  );
};

export default App;
