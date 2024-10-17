import React, { memo } from "react";
import { LogOut } from "lucide-react";
import sidebarItems from "./SideBarItems";
import { postRequest } from "../../../lib/buildClient/buildClient";
import { Link, useNavigate } from "react-router-dom";
import { TOBE } from "@/types/constant/Tobe";
type Props = {
  isOpenSideBar?: TOBE;
};

const SideBar = ({ isOpenSideBar }: Props) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    (async function () {
      await postRequest("/auth/logout");
      navigate("/login");
    })();
  };
  return (
    <aside
      className={`bg-white w-[40%] md:w-[23%] rounded-tr-[2rem] h-[90vh] transform transition-transform duration-300 ${
        isOpenSideBar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {" "}
      <ul className="space-y-4 p-4">
        {sidebarItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-3 p-2 rounded-md cursor-pointer"
          >
            <div className="p-2   bg-info rounded-md ">
              <span className="text-base text-secondary">{item.icon}</span>
            </div>
            <Link
              to={"/"}
              className="capitalize hover:text-primary transition-all duration-300 font-semibold text-base ml-2 text-text"
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li className="flex items-center space-x-3 p-2 rounded-md cursor-pointer">
          <div className="p-2   bg-info rounded-md">
            <span className="text-base text-secondary">{<LogOut />}</span>
          </div>
          <span
            onClick={handleLogout}
            className="capitalize font-semibold text-base ml-2 text-text"
          >
            Logout
          </span>
        </li>
      </ul>
    </aside>
  );
};

export default memo(SideBar);
