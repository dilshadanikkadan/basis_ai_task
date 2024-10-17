import React from "react";
import { ChevronRight } from "lucide-react";

type Props = {
  list: string[];
};

/*
 a resusabel bread crumbs for user experiance
*/
const Breadcrumbs = ({ list }: Props) => {
  return (
    <section className="">
      <p className="text-primary text-sm md:text-lg flex font-semibold ml-16 mt-5">
        {list?.map((item,i) => (
          <>
            {item} <span className="px-5">{i !== list.length -1 && <ChevronRight />}</span>
          </>
        ))}
      </p>
    </section>
  );
};

export default Breadcrumbs;
