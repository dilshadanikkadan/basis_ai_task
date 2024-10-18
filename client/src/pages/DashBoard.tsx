import React, { useState, useEffect } from "react";
import Navbar from "../components/layouts/Navbar/Navbar";
import SideBar from "../components/layouts/Sidebar/SideBar";
import Breadcrumbs from "../components/navigation/Breadcrumbs";
import InfoProvider from "../components/pages/DashBoard/InfoProvider";
import Table from "../components/viewComponents/table/Table";
import useRequest from "../hooks/useRequest";
import LoaderIcon from "../components/loader/Loader";

const DashBoard = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [limit, setLimit] = useState(2);
  const [name, setName] = useState("");

  const { data, loading, fetchData } = useRequest(
    `/patients?pageNo=${pageNumber}&limit=${limit}&name=${name}`
  );

  useEffect(() => {
    fetchData();
  }, [pageNumber, limit, name]);

  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar
        isOpenSideBar={isOpenSideBar}
        setisOpenSideBar={setIsOpenSideBar}
      />
      <main className="flex mt-6">
        <SideBar isOpenSideBar={isOpenSideBar} />
        <section className={`transition-all duration-300 ease-in-out ${isOpenSideBar ? 'w-[60%] md:w-[77%]' : 'w-full'}`}>
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
              clasName="w-full md:w-[90%] px-4 md:px-0 md:mx-auto"
            />
          )}
        </section>
      </main>
    </div>
  );
};

export default DashBoard;