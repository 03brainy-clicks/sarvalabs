import List from "../../json/list.json";
import Beats from "../../assets/icon/beats.svg";
import Disc from "../../assets/icon/disc.svg";
import Ring from "../../assets/icon/ring.svg";

const FriendsList = () => {
  const friendsList = List.friendActivities;

  return (
    <div className="h-full overflow-hidden overflow-y-auto space-y-1 pb-5">
      {friendsList.map((friend) => {
        return (
          <div className="flex gap-2 p-2 items-center" key={friend.id}>
            <div className="w-9 h-9 rounded-full overflow-hidden">
              <img
                src={friend.profilepicture}
                alt="profile"
                className="w-full h-full"
              />
            </div>
            <div className=" text-textSecondary gap-[.13rem] leading-3 flex-1">
              <div className="flex justify-between items-center w-f">
                <h4 className="text-xs font-bold line-clamp-1 flex-1 leading-3">
                  {friend.name}
                </h4>
                <img src={Beats} alt="beats" className="ml-auto w-3 h-3" />
              </div>
              <p className="text-[0.625rem] line-clamp-1 leading-3">
                {friend.song}
              </p>
              <div className="flex gap-1 items-center">
                {friend.profileIcon === "Ring" ? (
                  <img src={Ring} alt="icon" className="w-2 h-2" />
                ) : (
                  <img src={Disc} alt="icon" className="w-2 h-2" />
                )}
                <p className="text-[0.625rem] line-clamp-1 leading-3">
                  {friend.singer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;
