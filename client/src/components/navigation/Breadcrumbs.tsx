import React from "react";
import { ChevronRight } from 'lucide-react';
type Props = {};

const Breadcrumbs = (props: Props) => {
  return (
    <section className="">
      <p className="text-primary text-lg flex font-semibold ml-16 mt-5">Dashboard <span className="px-5">{<ChevronRight/>}</span> Admin Dashboard</p>
    </section>
  );
};

export default Breadcrumbs;
