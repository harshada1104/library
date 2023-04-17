import React, { useState } from 'react'
import { useGlobalContext } from '../Context'
import ReactPaginate from "react-paginate"
import Loadering from './Loadering';



const Main = () => {
    const {books,isloading}=useGlobalContext();
   
  const [pageNum, setPageNum] = useState(0);

  const booksPerPage = 10;
  const pagesVistied = pageNum * booksPerPage;
  const pageCount = Math.ceil(books.length / booksPerPage);
  const changePage = ({ selected }) => {
    setPageNum(selected);
  };
if(!isloading){
  return (
    <>
  
     <table className="border-collapse  mx-8 w-[78%] mb-10  ">
     
     <thead className='  bg-gradient-to-r from-violet-500 to-fuchsia-500'>
    <tr>
        <th className="p-3 font-bold uppercase  text-gray-600 border border-gray-300 hidden lg:table-cell">Title and Sub-title</th>
        <th className="p-3 font-bold uppercase  text-gray-600 border border-gray-300 hidden lg:table-cell">Author</th>
        <th className="p-3 font-bold uppercase  text-gray-600 border border-gray-300 hidden lg:table-cell">Year of publication</th>
       
    </tr>
</thead>
{books.slice(pagesVistied, pagesVistied + booksPerPage).map((curbooks) => {
         
      

        return <tbody> 
        <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0 ">
        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
            {curbooks.title}
        </td>
        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
           {curbooks.author_name}
        </td>
        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
            <span className="  py-1 px-3 text-xl font-bold">{curbooks.first_publish_year}</span>
        </td>
       
    </tr>
         </tbody>
    })}
</table>
<ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtn"}
        previousClassName={"prevBtn"}
        nextLinkClassName={"nextBtn"}
        activeClassName={"activeBtn"}
        
      />
</>
    
  )
}else{
  return <Loadering/>
}
}

export default Main