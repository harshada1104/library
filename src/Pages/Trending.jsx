import React, { useState } from "react";
import { useGlobalContext } from "../Context";

const Trending = () => {
  const { trend } = useGlobalContext();

  const [pageNum, setPageNum] = useState(0);

  const booksPerPage = 10;
  const pagesVistied = pageNum * booksPerPage;
  const pageCount = Math.ceil(trend.length / booksPerPage);
  const changePage = ({ selected }) => {
    setPageNum(selected);
  };

  return (
    <>
      <div className="text-[3rem] ml-8 py-[2rem]">
        Top 10 Trending Books in Javascript
      </div>
      <table className="border-collapse  mx-8 w-[100%] mb-10  ">
        <thead className="  bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <tr>
            <th className="p-3 font-bold uppercase  text-gray-600 border border-gray-300 hidden lg:table-cell">
              Title and Sub-title
            </th>

            <th className="p-3 font-bold uppercase  text-gray-600 border border-gray-300 hidden lg:table-cell">
              Year of publication
            </th>
          </tr>
        </thead>
        {trend
          .slice(pagesVistied, pagesVistied + booksPerPage)
          .map((curbooks) => {
            return (
              <tbody>
                <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0 ">
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                      Company name
                    </span>
                    {curbooks.title}
                  </td>

                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                      Status
                    </span>
                    <span className="  py-1 px-3 text-xl font-bold">
                      {curbooks.first_publish_year}
                    </span>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </>
  );
};

export default Trending;
