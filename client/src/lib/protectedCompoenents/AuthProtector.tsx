import React, { ReactNode, useEffect, useLayoutEffect } from "react";
import useRequest from "../../hooks/useRequest";
import { useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

/*
this is wrapper compoenet accept the children and protect
*/

const AuthProtector = ({ children }: Props) => {

  const { data, fetchData, loading } = useRequest("/auth/currentUser");

  const navigate = useNavigate();

  useLayoutEffect(() => {
    fetchData();
  }, []);

  if (!loading && !data) {
    navigate("/login");
  }

  return data ? <>{children}</> : null;
};

export default AuthProtector;
