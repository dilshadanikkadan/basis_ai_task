import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { postRequest } from "../../../lib/buildClient/buildClient";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // simple validation from client side
      if (userName.trim().length < 2) {
        setError("invalid userName or password");
        return;
      }

      const resposne = await postRequest("/auth/login", {
        userName,
        password,
      });
      if (!resposne?.data) {
        setError("invalid userName or password");
      }
      navigate("/", { replace: true });
      console.log("Login submitted", { userName, password, rememberMe });
    } catch (error) {
      setError("invalid userName or password");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white  shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center text-primary mb-8">
        BASIS Hospital
      </h1>

      <h2 className="text-2xl font-semibold text-gray-700 mb-5">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Username <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password <span className="text-primary">*</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label
            htmlFor="rememberMe"
            className="ml-2 block text-sm text-gray-700"
          >
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
