import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline/index";
import HomeIcon from "../../assets/icon/homeIcon.svg";
import Library from "../../assets/icon/library.svg";

// Navigation component for rendering the mobile navigation menu
const Navigation = () => {
  return (
    <>
      {/* Mobile navigation menu */}
      <div className="menu py-3 bg-secondary md:hidden flex justify-evenly sm:gap-20 gap-5">
        {/* Home section */}
        <div className=" text-textSecondary cursor-pointer">
          <img src={HomeIcon} className="w-5 h-5  mx-auto " alt="home" />
          <p className="text-[.5rem] text-center pt-1">Home</p>
        </div>
        {/* Search section */}
        <div className=" text-textPrimary cursor-pointer">
          <MagnifyingGlassIcon className="w-5 h-5  mx-auto " />
          <p className="text-[.5rem] text-center pt-1 ">Search</p>
        </div>
        {/* Library section */}
        <div className=" text-textSecondary cursor-pointer">
          <img src={Library} className="w-5 h-5  mx-auto" alt="library" />
          <p className="text-[.5rem] text-center pt-1">Library</p>
        </div>
        {/* Profile section */}
        <div className=" text-textSecondary cursor-pointer">
          <UserIcon className="w-5 h-5  mx-auto" />
          <p className="text-[.5rem] text-center pt-1">Profile</p>
        </div>
      </div>
    </>
  );
};

export default Navigation;
