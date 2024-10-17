import React from 'react'
import Table from '../../viewComponents/table/Table';

type Props = {}
interface TableItem {
    number: number;
    name: string;
    age: number;
    condition: string;
  }
const data: TableItem[] = [
    { number: 1, name: "John Doe", age: 30, condition: "Good" },
  ];
const LabResults = (props: Props) => {
  return (
    <section className="w-[90%] mx-auto h-[50vh] bg-white rounded-lg p-5">
    <h3 className="text-lg   font-semibold text-main ">lab Results</h3>
    <div className="list">
      <Table data={data} clasName="w-[100%]" />
    </div>
  </section>
  )
}

export default LabResults