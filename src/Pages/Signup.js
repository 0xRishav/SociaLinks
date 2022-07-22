import Navbar from "../Components/Navbar";
import { Formik } from "formik";
import ShoeBrandMockUp from "../assets/main2.jpg";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Signup() {
  const isLoginPage = window.location.pathname.includes("login");
  //   console.log(window.location.pathname);
  return (
    <div>
      <Navbar />

      <div className="flex justify-around items-center">
        <div className="w-4/12">
          <div className="text-5xl text-black font-bold">Welcome back</div>
          <div className="text-grey font-light mt-4 mb-12">
            Welcome back! Please enter your details.
          </div>

          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-7">
                  <label htmlFor="email" className="mb-1.5 text-lg">
                    Email
                  </label>
                  <input
                    className="bg-transparent border-2 border-black rounded-lg block w-full transition ease-in-out m-0 pl-4 h-11"
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Please Email here"
                  />
                </div>
                {/* {errors.email && touched.email && errors.email}  */}
                <div>
                  <label htmlFor="password" className="mb-1.5 text-lg">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Enter Password here"
                    className="bg-transparent border-2 border-black rounded-lg block w-full transition ease-in-out m-0 pl-4 h-11"
                  />
                </div>
                {errors.password && touched.password && errors.password}
                {/* <Link /> */}
                <div className="text-right mt-7 text-blue">
                  Forgot Password?
                </div>
                <button
                  type="submit"
                  className="bg-blue w-full py-2.5 text-white rounded-lg mt-7"
                  disabled={isSubmitting}
                >
                  {isLoginPage ? "Login" : "Sign up"}
                </button>
                <button
                  type="submit"
                  className="bg-transparent w-full border-solid border-black border-2 py-2.5 text-black rounded-lg mt-7"
                  disabled={isSubmitting}
                >
                  <div className="flex justify-center items-center">
                    <FcGoogle size={20} />
                    <div className="ml-2">
                      {" "}
                      {isLoginPage
                        ? "Login with Google"
                        : "Sign up with Google"}
                    </div>
                  </div>
                </button>
              </form>
            )}
          </Formik>
        </div>
        <div className="pt-20 pl-10">
          <div>
            <img
              src={ShoeBrandMockUp}
              style={{ height: "80vh" }}
              alt="app-screen"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
