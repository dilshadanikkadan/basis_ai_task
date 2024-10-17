import { useEffect, useState } from "react";
import Navbar from "../components/layouts/Navbar/Navbar";
import SideBar from "../components/layouts/Sidebar/SideBar";
import Breadcrumbs from "../components/navigation/Breadcrumbs";
import InfoProvider from "../components/pages/DashBoard/InfoProvider";
import Table from "../components/viewComponents/table/Table";
import useRequest from "../hooks/useRequest";
import LoaderIcon from "../components/loader/Loader";

type Props = {};


const DashBoard = (props: Props) => {

  const [isOpenSideBar, setisOpenSideBar] = useState<Boolean>(true);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [limit, setLimit] = useState<number>(2);
  const [name, setName] = useState("");
  const [deboundedName, setDebouncedName] = useState<string>(name);

  const { data, loading, fetchData, error } = useRequest(
    `/patients?pageNo=${pageNumber}&limit=${limit}&name=${name}`
  );

  /*
making a debounce function to optimize the limit of serching 
*/

  useEffect(() => {
    const handlerDebouncer = setTimeout(() => {
      setDebouncedName(name);
    }, 500);
    return () => {
      clearTimeout(handlerDebouncer);
    };
  }, [deboundedName]);

  
  useEffect(() => {
    fetchData();
  }, [pageNumber, limit, name]);

  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar
        isOpenSideBar={isOpenSideBar}
        setisOpenSideBar={setisOpenSideBar}
      />
      <main className="section w-full mt-6 flex  overflow-hidden">
        {isOpenSideBar && <SideBar isOpenSideBar={isOpenSideBar} />}
        <section className="w-full ">
          <Breadcrumbs list={["Dashboard", "Admin"]} />
          <InfoProvider setName={setName} />
          {loading ? (
            <div className="w-[90%] mx-auto flex items-center justify-center h-[50%]">
              <LoaderIcon />
            </div>
          ) : (
            <Table
              data={data}
              setPageNumber={setPageNumber}
              clasName="w-full md:w-[90%] mx-4 md:mx-auto"
            />
          )}
        </section>
      </main>
    </div>
  );
};

export default DashBoard;
