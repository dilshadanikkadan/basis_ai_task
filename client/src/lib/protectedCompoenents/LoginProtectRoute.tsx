import React, { ReactNode, useEffect, useLayoutEffect } from "react";
import useRequest from "../../hooks/useRequest";
import { useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const LoginProtect = ({ children }: Props) => {
  const { data, fetchData, loading } = useRequest("/auth/currentUser");

  const navigate = useNavigate();

  useLayoutEffect(() => {
    fetchData();
  }, []);

  if (data) {
    navigate("/");
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return !data ? <>{children}</> : null;
};

export default LoginProtect;
