import React from "react";
import Pagination from "../../navigation/Pagination";
import { Link } from "react-router-dom";

interface TableItem {
  _id?: any;
  number?: number;
  name?: string;
  age?: number;
  medicalHistory?: any;
  condition?: string;
  diagnosisDate?: string;
}

interface TableProps {
  data: TableItem[];
  clasName?: string;
  setPageNumber?:any
}

const Table: React.FC<TableProps> = ({ data,setPageNumber, clasName }) => {
  const isDataAvailable = data && data.length > 0 && data[0].medicalHistory;
  return (
    <div className={`overflow-x-auto ${clasName}  mx-auto w-full mt-5 md:mt-0 `}>
      <table className="min-w-full bg-white">
        <thead className="bg-secondary">
          <tr>
            <th className="px-6 py-3 font-semibold text-left text-xs  text-gray-900 uppercase tracking-wider">
              Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Details
            </th>

            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Condition
            </th>
            {isDataAvailable && (
              <>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                  Actions
                </th>
              </>
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data?.map((item, i) => (
            <tr key={item?.number}>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.number || i + 1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item?.name || item?.condition}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item?.age || item?.diagnosisDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.medicalHistory
                  ? item?.medicalHistory[0]?.condition
                  : item?.condition}
              </td>
              {isDataAvailable && (
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    to={`${String(item?._id)}`}
                    className="px-3 py-1 bg-primary text-white rounded hover:bg-[#8f1925] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    View Details
                  </Link>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {isDataAvailable && <Pagination  setPageNumber={setPageNumber}/>}
    </div>
  );
};

export default Table;
