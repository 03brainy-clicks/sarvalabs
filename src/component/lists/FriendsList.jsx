import List from "../../json/list.json";
import Beats from "../../assets/icon/beats.svg";
import Disc from "../../assets/icon/disc.svg";
import Ring from "../../assets/icon/ring.svg";

const FriendsList = () => {
  // Fetch friends' data from JSON
  const friendsList = List.friendActivities;

  return (
    <div className="h-full overflow-hidden overflow-y-auto space-y-1 pb-5 px-1">
      {/* Iterate through each friend */}
      {friendsList.map((friend) => (
        <div className="flex gap-2 p-2 items-center hover:bg-hover animate rounded-sm" key={friend.id}>
          {/* Display profile picture */}
          <div className="w-9 h-9 rounded-full overflow-hidden">
            <img src={friend.profilepicture} alt="profile" className="w-full h-full" />
          </div>
          {/* Display friend details */}
          <div className="text-textSecondary gap-[.13rem] leading-3 flex-1">
            <div className="flex justify-between items-center w-full">
              {/* Display friend name */}
              <h4 className="text-xs font-bold line-clamp-1 flex-1 leading-3">
                {friend.name}
              </h4>
              {/* Display beats icon */}
              <img src={Beats} alt="beats" className="ml-auto w-3 h-3" />
            </div>
            {/* Display friend's current song */}
            <p className="text-[0.625rem] line-clamp-1 leading-3">
              {friend.song}
            </p>
            <div className="flex gap-1 items-center">
              {/* Display icon based on profileIcon value */}
              <img src={friend.profileIcon === "Ring" ? Ring : Disc} alt="icon" className="w-2 h-2" />
              {/* Display friend's singer information */}
              <p className="text-[0.625rem] line-clamp-1 leading-3">
                {friend.singer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
