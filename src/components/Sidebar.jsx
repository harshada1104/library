import React from "react";
import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { getdata } = useGlobalContext();

  return (
    <div className="w-[17%]  bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
      <div className="font-bold text-[2rem] pt-4 text-white">
        Trending Subjects
      </div>
      <div className="text-xl py-1 text-white  ml-4">
        <ol>
          <li>
            <Link to="/trending" onClick={getdata("horror")}>
              Horror
            </Link>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Sidebar;
