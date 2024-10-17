import { useState } from "react";
import Navbar from "../components/layouts/Navbar/Navbar";
import SideBar from "../components/layouts/Sidebar/SideBar";
import Breadcrumbs from "../components/navigation/Breadcrumbs";
import InfoProvider from "../components/pages/DashBoard/InfoProvider";
import PatientInfo from "../components/pages/PatientDetails/PatientInfo";
type Props = {};

const PatientDetails = (props: Props) => {
  const [isOpenSideBar, setisOpenSideBar] = useState<Boolean>(true);

  return (
    <>
      <Navbar
        isOpenSideBar={isOpenSideBar}
        setisOpenSideBar={setisOpenSideBar}
      />
      <main className="section w-full mt-6 flex">
        {isOpenSideBar && <SideBar isOpenSideBar={isOpenSideBar} />}
        <section className="w-full ">
          <Breadcrumbs
            list={["Dashboard", "Admin ", "Patient "]}
          />
          <PatientInfo />
        </section>
      </main>
    </>
  );
};

export default PatientDetails;
