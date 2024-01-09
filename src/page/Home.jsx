import { useState } from "react";
import ArtistCard from "../component/cards/ArtistCard";
import List from "../json/list.json";
import GenresCard from "../component/cards/GenresCard";
import CategoryCard from "../component/cards/CategoryCard";
import Topbar from "../component/layout/Topbar";

const Home = () => {
  const [artists] = useState(List.artists);
  const [genres] = useState(List.genres);
  const [categories] = useState(List.categories);

  return (
    <>
      <Topbar />
      <div className="sm:px-7 p-4 w-full h-full space-y-8 overflow-y-auto">
        {/* serches */}
        <div className="w-full space-y-4 ">
          <h2 className="text-[2rem] leading-10 font-bold text-textPrimary">
            Recent searches
          </h2>
          <div className="w-full overflow-hidden overflow-x-auto flex gap-6 ">
            {artists.map((artist) => {
              return (
                <ArtistCard
                  name={artist.name}
                  image={artist.image}
                  key={artist.id}
                />
              );
            })}
          </div>
        </div>
        {/* genres */}
        <div className="w-full space-y-4 ">
          <h2 className="text-[2rem] leading-10 font-bold text-textPrimary">
            Your top genres
          </h2>
          <div className="w-full overflow-hidden overflow-x-auto flex gap-6">
            {genres.map((genre) => {
              return <GenresCard genres={genre} key={genre.id} />;
            })}
          </div>
        </div>
        {/* categories  */}
        <div className="w-full space-y-4 pb-20">
          <h2 className="text-[2rem] leading-10 font-bold text-textPrimary">
            Browse all{" "}
          </h2>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
            {categories.map((category) => {
              return <CategoryCard category={category} key={category.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
