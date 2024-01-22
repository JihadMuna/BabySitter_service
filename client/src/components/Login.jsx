import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = ({ onClose, isLoginModalOpen }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    // Add login logic here
    console.log("Logging in with:", { username, password });
    // You may want to perform authentication and handle the login process
    //just close the modal in this example
    onClose();
  };

  return (
    <>
      {isLoginModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white px-5 py-20 mt-20 rounded shadow-lg relative">
            <button
              onClick={() => {
                onClose();
                navigate("/");
              }}
              className="absolute top-3 right-5 text-gray-600-bold cursor-pointer"
            >
              X
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <button
                type="button"
                onClick={handleLogin}
                className="bg-pink-600 text-white px-40 py-2 rounded hover:bg-pink-500 w-full"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-center">
              Don't have an account?{" "}
              <Link to="/sign-up" className="text-pink-600 hover:underline">
                Register here
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
