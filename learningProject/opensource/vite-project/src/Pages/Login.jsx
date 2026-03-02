import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setuserName] = useState("");

  const [password, setpassword] = useState("");
  const [showPass, setshowPass] = useState(false);
  const userinput = useRef(null);
  const userPass = useRef(null);
  function handleSubmit() {
    if (userName == "lokesh" && password == "lokesh123") {
      localStorage.setItem("token", "randomtokenlkdsjflkjwoernnlkv");
      navigate("/items/products");
      return;
    }
    console.log("your password is wrong");
  }

  function showPassfunc() {
    setshowPass(!showPass);
  }
  return (
    <div className="border-1 rounded-md  w-100 m-auto flex flex-col p-10 mt-10 gap-7 ">
      <h1>Login Now......</h1>
      <div className="bg-white  flex flex-col">
        <label htmlFor="username">Enter Your Name</label>
        <input
          type="text"
          id="username"
          className="bg-gray-200 w-70 py-2 px-6 m-4"
          placeholder="enter your name"
          ref={userinput}
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
        />

        <label htmlFor="password">Enter Your Password</label>
        <input
          type={showPass ? "text" : "password"}
          id="password"
          className="bg-gray-200 w-70 py-2 px-6 m-4"
          placeholder="enter your password"
          ref={userPass}
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button className="bg-amber-100 w-30 p-2 rounded-md m-4" onClick={showPassfunc}>
          show pass
        </button>
      </div>
      <div className='bg-red-500 text-white '  ></div>
      <button className="bg-green-300 py-2 px-6 " onClick={handleSubmit}>
        Loing
      </button>
    </div>
  );
};

export default Login;
