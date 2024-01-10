import Topbar from "../component/layout/Topbar";
import Verified from "../assets/icon/verified.svg";
import Play from "../assets/icon/play.svg";
import { HeartIcon } from "@heroicons/react/24/solid/index";
import { useState } from "react";
import List from "../json/list.json";
import SongCard from "../component/cards/SongCard";
import AlbumCard from "../component/cards/AlbumCard";

const LikedSongs = () => {
  return (
    <div className="flex-1 lg:block hidden">
      <h3 className="text-xl font-bold text-textPrimary mb-3">Liked Songs</h3>
      <div className="flex gap-2 items-center">
        <div className="relative flex min-w-16">
          <span className="absolute h-6 w-6 rounded-full bg-[#1dba54] flex items-center justify-center border border-black bottom-0 right-0">
            <HeartIcon className="w-5 h-5 text-textPrimary" />
          </span>
          <img
            src="https://raw.githubusercontent.com/03brainy-clicks/sarvalabs/main/src/assets/albums/bomt.png"
            alt=""
            className="w-16 h-16 rounded-full"
          />
        </div>
        <div className="">
          <h5 className="text-lg font-bold text-textPrimary">
            You’ve liked 4 songs
          </h5>
          <p className="text-[0.625rem] text-textSecondary">By Ronald</p>
        </div>
      </div>
    </div>
  );
};

const ArtistHero = () => {
  return (
    <div className="bg-white bg-opacity-10 ">
      {" "}
      <Topbar />
      <div className="flex items-center gap-4 py-5 sm:px-7  p-5 md:pt-14">
        <img
          src="https://raw.githubusercontent.com/03brainy-clicks/sarvalabs/responsive/src/assets/portrait/man-4.jpeg"
          alt=""
          className="md:w-40 md:h-40 sm:h-30 sm:w-30 h-20 w-20 rounded-full"
        />
        <div>
          <div className="flex gap-2 items-center">
            <img src={Verified} alt="verified" />
            <span className="text-xs text-textPrimary leading-4">
              Verified Artist
            </span>
          </div>
          <h1 className="font-extrabold md:text-[5rem] sm:text-6xl text-4xl text-textPrimary sm:leading-[6rem]">
            Bruno Mars
          </h1>
          <div>
            <span className="text-xs text-textPrimary leading-4">
              9,821,271 monthly listeners
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const PlayList = () => {
  const [songs] = useState(List.playlist);
  return (
    <div className="lg:w-2/3 w-full">
      <h3 className="text-xl font-bold text-textPrimary mb-3">Popular</h3>
      <div className="space-y-3  mb-6">
        {songs.map((song) => {
          return <SongCard key={song.id} song={song} />;
        })}
      </div>
      <span className="text-[.625rem] text-textPrimary animate hover:border-b pb-1 cursor-pointer">SEE MORE</span>
    </div>
  );
};

const PopularReleases = () => {
  const [albums] = useState(List.albums);
  return (
    <>
      <h3 className="text-xl font-bold text-textPrimary mb-3">
        Popular releases
      </h3>
      <div className="flex overflow-x-auto w-full gap-6">
        {albums.map((album) => {
          return <AlbumCard album={album} key={album.id} />;
        })}
      </div>
    </>
  );
};

const Artist = () => {
  return (
    <div className="overflow-hidden overflow-y-auto h-full flex flex-col">
      <ArtistHero />
      <div className="h-full sm:px-7 py-4 p-5 space-y-6 flex-1 overflow-hidden overflow-y-auto">
        <div className="flex gap-6 items-center">
          <img src={Play} alt="" className="w-14 h-14 cursor-pointer" />
          <button className="text-[.625rem] py-2 cursor-pointer px-6 rounded border border-textPrimary text-textPrimary">
            FOLLOW
          </button>
        </div>
        <div className="flex flex-wrap gap-6">
          <PlayList />
          <LikedSongs />
        </div>
        <div>
          <PopularReleases />
        </div>
      </div>
    </div>
  );
};

export default Artist;
