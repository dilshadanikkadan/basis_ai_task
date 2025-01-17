import React, { memo } from "react";
import user from "../../../assets/images/user.jpg";
import logo from "../../../assets/images/logo.png";
import menu from "../../../assets/images/menu.png";
type Props = {
  setisOpenSideBar?: any;
  isOpenSideBar?: any;
};

const Navbar = ({setisOpenSideBar,isOpenSideBar}: Props) => {
  return (
    <nav className="flex h-[70px] w-screen overflow-hidden  bg-white ">
      <div className="left flex-[1]  flex items-center justify-center  ">
        <div className="wrapper w-[90%] mx-auto flex justify-between items-center">
          {/* <img src={logo} alt="lpgo" className="h-9 object-cover" /> */}
          <h1 className="text-primary text-2xl font-bold uppercase ">basis ai</h1>
          <img onClick={()=> setisOpenSideBar(!isOpenSideBar)} src={menu} alt="menu" className="h-8 w-8" />
        </div>
      </div>
      <div className="cenetr hidden md:block flex-[3] "></div>

      <div className="right flex-[1]  hidden md:flex items-center justify-center ">
        <div className="wrapper w-[85%] mx-auto flex gap-5  items-center">
          <h1 className="text-primary font-extrabold text-xl">Super Admin</h1>
          <img src={user} alt="" className="h-9 w-9 rounded-md"  />
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
