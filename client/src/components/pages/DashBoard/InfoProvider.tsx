import React, { useState } from "react";
import SearchInput from "../../forms/SearchInput";
import { Plus } from 'lucide-react';
import PriorForm from "../PriorForm/PriorForm";
type Props = {
    setName:any
};

const InfoProvider = ({setName}: Props) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <section className="w-[90%]  mx-auto h-20 rounded-t-2xl mt-5 bg-white flex items-center">
      <div className="left flex-[1] mx-5 flex gap-4 items-center">
        <h3 className="text-lg  hidden md:block font-semibold text-main">Patients List</h3>
        <div className="flex gap-4">
          <SearchInput setName={setName} />
          <div className="bg-[#F5F5F6] p-2 rounded-md cursor-pointer">
            <Plus onClick={()=> setIsFormOpen(true)} className="text-primary" />
          </div>
        </div>
      </div>
      <div className="right flex-[1]"></div>
      <PriorForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default InfoProvider;
