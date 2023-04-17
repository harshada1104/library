import React, { useState } from "react";
import { useGlobalContext } from "../Context";

const Navbar = () => {
    const {query,setQuery}=useGlobalContext();
    
  return (
    <div className="flex flex-wrap gap-[40%] py-[1rem] bg-white-300 box-shas ">
      <div className="title text-[2rem] font-bold">
        <h1 >Open Book Library</h1>
      </div>

      <section className="search-section">
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="Search here"
              value={query}
              className="text-center  border-2 w-[34rem] h-[3rem]"
              onChange={(e) => setQuery(e.target.value)}
             
          
            />
           
          </div>
        </form>
      </section>
    </div>
  );
};

export default Navbar;
