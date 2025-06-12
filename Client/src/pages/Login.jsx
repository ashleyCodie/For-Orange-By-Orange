import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../redux/authSlice";
import handcuffs from "../assets/images/handcuffs.png";

const Login = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, isLoggedIn, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn && user.token) {
      navigate("/profile");
    }
  }, [isLoggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginForm.email === "" || loginForm.password === "") {
        //show some error message
    } else {
      dispatch(authLogin({ ...loginForm }));
      navigate("/dashboard")
    }
  }

  return (
    <div className="ml-80 pl-96 pt-60 h-screen">
      <span
        className="flex flex-col items-center bg-white border-4 border-orange-500 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-blue-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover  w-full p-4 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={handcuffs}
          alt="logo"
        />
        <div className="flex flex-col justify-between p-10 leading-normal w-96 h-96">
      <h1 className="text-center text-3xl font-bold text-orange-500">Login To You Account</h1>
          <form onSubmit={handleSubmit}>
            <div className="relative z-0 w-96 mb-5 group mt-2">
              <input
                  value={loginForm.email}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, email: e.target.value })
                  }
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-80 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 w-80 mb-5 group">
              <input
                 value={loginForm.password}
                 onChange={(e) =>
                   setLoginForm({ ...loginForm, password: e.target.value })
                 }
                type="password"
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-80 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            <button
              type="submit"
              className="text-blue-700 bg-orange-500 hover:bg-blue-800 hover:text-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login.
            </button>
          </form>
          {loading && <h1>LOADING...</h1>}
        </div>
      </span>
    </div>
  );
};

export default Login;