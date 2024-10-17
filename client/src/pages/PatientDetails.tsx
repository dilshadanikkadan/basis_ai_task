import Navbar from "../components/layouts/Navbar/Navbar";
import SideBar from "../components/layouts/Sidebar/SideBar";
import Breadcrumbs from "../components/navigation/Breadcrumbs";
import InfoProvider from "../components/pages/DashBoard/InfoProvider";
import PatientInfo from "../components/pages/PatientDetails/PatientInfo";
type Props = {};

const PatientDetails = (props: Props) => {
  return (
    <>
      <Navbar />
      <main className="section w-full mt-6 flex">
        <SideBar />
        <section className="w-full ">
          <Breadcrumbs />
          <PatientInfo/>

        </section>
      </main>
    </>
  );
};

export default PatientDetails;
