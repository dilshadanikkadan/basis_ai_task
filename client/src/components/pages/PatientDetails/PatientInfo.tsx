import React, { useContext, useEffect, useState } from "react";
import user from "../../../assets/images/user.jpg";
import History from "./History";
import Treatments from "./Treatments";
import PriorForm from "../PriorForm/PriorForm";
import { useParams } from "react-router-dom";
import useRequest from "../../../hooks/useRequest";

type Props = {};

const PatientInfo = (props: Props) => {
  const [isPriorFormOpen, setIsPriorFormOpen] = useState(false);
  const { id } = useParams();

  const { data, loading, fetchData, error } = useRequest(`/patients/${String(id)}`);

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <section className="flex w-[90%] mx-auto mt-5">
      <div className="left flex-[1]">
        <div className="wrapper w-full h-[30rem] bg-white rounded-lg p-5">
          <img
            src={user}
            alt=""
            className="h-28 w-28 object-cover mx-auto rounded-full"
          />
          <div className="info mt-10 flex flex-col gap-4">
            <p className="text-text">
              <span className="font-semibold ">Name</span> : {data?.name}
            </p>
            <p className="text-text">
              <span className="font-semibold ">Age</span> : {data?.age}
            </p>
            <p className="text-text">
              {" "}
              <span className="font-semibold ">Phone</span> : {data?.name}
            </p>
            <p className="text-text">
              <span className="font-semibold ">Status</span> : {data?.name}
            </p>
            <p className="text-text">
              <span className="font-semibold ">Status</span> : {data?.name}
            </p>
            <p className="text-text">
              <span className="font-semibold ">Status</span> : {data?.name}
            </p>
          </div>
        </div>
      </div>
      <div className="right flex-[3] flex flex-col relative">
        <div className="wrapper w-full flex  flex-col gap-5 overflow-y-scroll max-h-[25rem]">
          <History  medicalHistory={data?.medicalHistory}/>
          <Treatments />
        </div>
        <div className="absolute bottom-2 right-10">
          <button
            onClick={() => setIsPriorFormOpen(true)}
            className="px-3 py-1 bg-primary text-white rounded hover:bg-[#8f1925] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Prior Request
          </button>
        </div>
      </div>
      <PriorForm
        isOpen={isPriorFormOpen}
        onClose={() => setIsPriorFormOpen(false)}
      />
    </section>
  );
};

export default PatientInfo;
