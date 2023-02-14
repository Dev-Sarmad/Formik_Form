import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  // const handle = () => {
  //   console.log("clicked");
  //   navigate("success");
  // };
  // formik will handle all the changes and stores the input
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    // Yup is use for the validation purposes
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "maximum 20 charachter")
        .required("the name is required"),
      email: Yup.string().email().required("Email is required"),
      password: Yup.string().required("The password is requires"),
      confirmpassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("confirm Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      navigate("/Success");
    },
  });
  console.log(formik.values);
  console.log(formik.errors);
  return (
    <main className="App">
      <div className="flex items-center h-screen justify-center bg-slate-800">
        <form
          className="bg-white rounded-lg p-20 flex"
          onSubmit={(values) => onsubmit(values)}
        >
          <div>
            <h1 className="text-2xl text-center text-red-600 ">
              Registor For The Communist Party ☭
            </h1>
            <p className="text-lg mt-3 p-3 text-green-600">
              Never benefit oneself, always benefit others 😎
            </p>
            <div className="mt-3">
              <label
                className={`block text-blue-500 ${
                  formik.touched && formik.errors.name ? "text-red-600" : ""
                }`}
              >
                {formik.errors.name ? formik.errors.name : "Name"}
              </label>
              <input
                className="mt-3 p-2 border-2 border-slate-500 w-full"
                name="name"
                type="text"
                w-full
                placeholder="Enter Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="mt-3">
              <label
                className={`block text-blue-500 ${
                  formik.touched && formik.errors.email ? "text-red-600" : ""
                }`}
              >
                {formik.errors.email ? formik.errors.email : "Email"}
              </label>
              <input
                className="mt-3 p-2 border-2 border-slate-500 w-full"
                name="email"
                type="email"
                w-full
                placeholder="Enter Your Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="mt-3">
              <label
                className={`block text-blue-500 ${
                  formik.touched && formik.errors.password ? "text-red-600" : ""
                }`}
              >
                {formik.errors.password ? formik.errors.password : "Password"}
              </label>
              <input
                className="mt-3 p-2 border-2 border-slate-500 w-full"
                name="password"
                type="text"
                w-full
                placeholder="Enter Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="mt-3">
              <label
                className={`block text-blue-500 ${
                  formik.touched && formik.errors.confirmpassword
                    ? "text-red-600"
                    : ""
                }`}
              >
                {formik.errors.confirmpassword
                  ? formik.errors.confirmpassword
                  : "ConfirmPassword"}
              </label>
              <input
                className="mt-3 p-2 border-2 border-slate-500 w-full"
                name="confirmpassword"
                type="text"
                w-full
                placeholder="Confirm Password"
                value={formik.values.confirmpassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                onClick={formik.handleSubmit}
                className="bg-blue-500 px-4 py-2 text-white hover:bg-red-500 hover:transition-all rounded-md w-full"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        {/* <button onClick={handle}>text</button> */}
      </div>
    </main>
  );
}

export default App;
