import React, { useState } from "react";
import Navbar from "../components/layouts/Navbar/Navbar";
import SideBar from "../components/layouts/Sidebar/SideBar";
import Breadcrumbs from "../components/navigation/Breadcrumbs";
import PatientInfo from "../components/pages/PatientDetails/PatientInfo";

const PatientDetails: React.FC = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(true);

  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar
        isOpenSideBar={isOpenSideBar}
        setisOpenSideBar={setIsOpenSideBar}
      />
      <main className="flex mt-6">
        <SideBar isOpenSideBar={isOpenSideBar} />
        <section className={`transition-all duration-300 ease-in-out ${isOpenSideBar ? 'w-[60%] md:w-[77%]' : 'w-full'}`}>
          <Breadcrumbs list={["Dashboard", "Admin", "Patient"]} />
          <PatientInfo />
        </section>
      </main>
    </div>
  );
};

export default PatientDetails;