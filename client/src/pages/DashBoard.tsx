import { useEffect, useState } from "react";
import Navbar from "../components/layouts/Navbar/Navbar";
import SideBar from "../components/layouts/Sidebar/SideBar";
import Breadcrumbs from "../components/navigation/Breadcrumbs";
import InfoProvider from "../components/pages/DashBoard/InfoProvider";
import Table from "../components/viewComponents/table/Table";
import useRequest from "../hooks/useRequest";
import AuthProtector from "../lib/protectedCompoenents/AuthProtector";

type Props = {};
// interface TableItem {
//   number: number;
//   name: string;
//   age: number;
//   condition: string;
// }

// const data: TableItem[] = [
//   { number: 1, name: "John Doe", age: 30, condition: "Good" },
//   { number: 2, name: "Jane Smith", age: 25, condition: "Excellent" },
//   { number: 3, name: "Jane Smith", age: 25, condition: "Excellent" },
//   { number: 4, name: "Jane Smith", age: 25, condition: "ok Ok" },
//   { number: 4, name: "Jane Smith", age: 25, condition: "ok Ok" },
// ];

const DashBoard = (props: Props) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [limit, setLimit] = useState<number>(2);
  const [name,setName] = useState("")
  
  const { data, loading, fetchData, error } = useRequest(
    `/patients?pageNo=${pageNumber}&limit=${limit}&name=${name}`
  );

  useEffect(() => {
    fetchData();
  }, [pageNumber,limit,name]);



  return (
    <>
      <Navbar />
      <main className="section w-full mt-6 flex">
        <SideBar />
        <section className="w-full ">
          <Breadcrumbs />
          <InfoProvider setName={setName} />
          <Table data={data} setPageNumber={setPageNumber} clasName="w-[90%]" />
        </section>
      </main>
    </>
  );
};

export default DashBoard;
