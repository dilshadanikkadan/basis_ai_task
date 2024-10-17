import React from "react";
import user from "../assets/images/loginBg.png";
import loginMain from "../assets/images/loginMain.png";
import LoginForm from "../components/pages/LoginForm/LoginForm";
type Props = {};

const Login = (props: Props) => {
  return (
    <main className="flex w-screen h-screen">
      <div
        className="left hidden md:block loginContainer bg-cover bg-center bg-no-repeat flex-1 items-center "
        style={{ backgroundImage: `url(${user})` }}
      >
        <div
          className="wrapper w-full h-[100%]"
          style={{ backgroundImage: `url(${loginMain})` }}
        ></div>
      </div>
      <div className="right m-10 md:m-3 flex-[1] flex items-center justify-center">
          <LoginForm/>
      </div>
    </main>
  );
};

export default Login;
