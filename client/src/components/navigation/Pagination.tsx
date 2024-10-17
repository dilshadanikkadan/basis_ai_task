import React from "react";

type Props = {
    setPageNumber:any
};

const Pagination = ({setPageNumber}: Props) => {
  return (
    <section className="h-[60px] bg-white w-full mx-auto flex items-center justify-center gap-4">
      <button className="px-3 py-1 bg-primary text-white rounded  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Page 1
      </button>
      <button onClick={()=> setPageNumber((prev:number)=> prev+1)} className="px-3 py-1  border border-[#B6202E] text-primary rounded  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Next
      </button>
      <button onClick={()=> setPageNumber((prev:number)=> prev > 0  && prev-1)} className="px-3 py-1 border border-[#B6202E] text-primary rounded  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Prev
      </button>
    </section>
  );
};

export default Pagination;
