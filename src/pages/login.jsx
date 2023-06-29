import { Link } from "react-router-dom";
import Layout from "../layout";
import login from "../assets/login.jpg";
function Login() {
  return (
    <Layout >
      <div className="h-[600px]  w-full flex items-center justify-center relative ">
        <div className="absolute top-0  bg-gray-900 opacity-80 w-full h-full"></div>
        <img src={login} alt="" className="h-full w-full object-cover" />

        <div className="bg-white w-[90%] lg:w-[25%] rounded-[10px] p-[20px] h-[60%] font-poppins flex flex-col space-y-[30px] absolute ">
          <p className="text-[25px] font-[600] font-poppins text-center">
            Sign In
          </p>
          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              className="h-[40px] border w-full px-[10px] outline-none font-poppins font-[12px] rounded-[5px]"
            />
          </div>
          <div>
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="h-[40px] border w-full px-[10px] outline-none font-poppins font-[12px] rounded-[5px]"
            />
          </div>
          <div>
            <button className="bg-primary text-white w-full h-[40px] rounded-[5px]">
              Sign In
            </button>
          </div>
          <p>
            Don&apos;t have an account?{" "}
            <Link className="text-primary font-[600]" to="/register">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
