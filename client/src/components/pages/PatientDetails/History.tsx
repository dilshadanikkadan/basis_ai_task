import React from "react";
import InfoProvider from "../DashBoard/InfoProvider";
import Table from "../../viewComponents/table/Table";

type Props = {
  medicalHistory: any;
};
interface TableItem {
  number: number;
  name: string;
  age: number;
  condition: string;
}
const data: TableItem[] = [
  { number: 1, name: "John Doe", age: 30, condition: "Good" },
];

const History = ({ medicalHistory }: Props) => {
  return (
    <section className="w-[90%] mx-auto h-[50vh] bg-white rounded-lg p-5">
      <h3 className="text-lg   font-semibold text-main ">Medical History</h3>
      <div className="list">
        <Table data={medicalHistory && medicalHistory} clasName="w-[100%]" />
      </div>
    </section>
  );
};

export default History;
