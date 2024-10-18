import React, { memo } from "react";
import { LogOut } from "lucide-react";
import sidebarItems from "./SideBarItems";
import { postRequest } from "../../../lib/buildClient/buildClient";
import { Link, useNavigate } from "react-router-dom";

const SideBar = ({ isOpenSideBar }:any) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await postRequest("/auth/logout");
    navigate("/login");
  };

  return (
    <aside
      className={`bg-white h-[90vh] overflow-hidden rounded-tr-2xl transition-all duration-300 ease-in-out ${
        isOpenSideBar ? 'w-[60%]  md:w-[18%]' : 'w-0'
      }`}
    >
      <ul className="space-y-4 p-4">
        {sidebarItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-3 p-2 rounded-md cursor-pointer"
          >
            <div className="p-2 bg-info rounded-md">
              <span className="text-base text-secondary">{item.icon}</span>
            </div>
            <Link
              to={"/"}
              className="capitalize hover:text-primary transition-all duration-300 font-semibold text-base ml-2 text-text whitespace-nowrap"
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li className="flex items-center space-x-3 p-2 rounded-md cursor-pointer">
          <div className="p-2 bg-info rounded-md">
            <span className="text-base text-secondary"><LogOut /></span>
          </div>
          <span
            onClick={handleLogout}
            className="capitalize font-semibold text-base ml-2 text-text whitespace-nowrap"
          >
            Logout
          </span>
        </li>
      </ul>
    </aside>
  );
};

export default memo(SideBar);