import React, { ReactNode, useEffect, useLayoutEffect } from "react";
import useRequest from "../../hooks/useRequest";
import { useNavigate } from "react-router-dom";
import LoaderIcon from "../../components/loader/Loader";

type Props = {
  children: ReactNode;
};

const AuthProtector = ({ children }: Props) => {
  const { data, fetchData, loading } = useRequest("/auth/currentUser");

  const navigate = useNavigate();

  useLayoutEffect(() => {
    fetchData();
  }, []);

  if (!loading && !data) {
    navigate("/login");
  }
//   if (loading) {
//     return (
//       <div className="w-[90%] mx-auto flex items-center justify-center h-full">
//         <LoaderIcon />
//       </div>
//     );
//   }

  return data ? <>{children}</> : null;
};

export default AuthProtector;
