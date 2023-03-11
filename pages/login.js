import React, { useState } from "react";
import Link from "next/link";
import routes from "routes/routes";

// Yup and formik
import * as Yup from "yup";
import { useFormik } from "formik";

// Seo
import { NextSeo } from "next-seo";

// hooks
import useViewport from "hooks/useViewport";

// Components
import GoogleIcon from "public/icons/GoogleIcon";
import TwitterIcon from "public/icons/TwitterIcon";
import CustomBtn from "components/utils/CustomBtn";
import CustomInput from "components/utils/CustomInput";
import CustomCheckbox from "components/utils/CustomCheckbox";

const initialValues = {
  email: "",
  password: "",
  remember: true,
};

const validationSchema = Yup.object({
  email: Yup.string().required("Email is a required property").email("Please enter a valid email"),
  password: Yup.string()
    .required("Password is a required property")
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password cant be longer than 64 characters"),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { height: minHeight } = useViewport("px");

  const onSubmit = (values) => {
    // setLoading(true);
    console.log(values);
  };

  const formik = useFormik({ initialValues, onSubmit, validationSchema, validateOnMount: true });

  return (
    <>
      <NextSeo title="login" />

      <div style={{ minHeight }} className="bg-form centering py-[70px] px-[10px]">
        <div className="form">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-xs opacity-40 mt-1 mb-6 font-medium">Please enter your email and password to login</p>
          <form className="flex flex-col" onSubmit={formik.handleSubmit}>
            <CustomInput name="email" label="Email" placeholder="info@gmail.com" formik={formik} />
            <CustomInput name="password" label="Password" placeholder="Enter your password" Password formik={formik} />
            <div className="pt-4">
              <CustomCheckbox name="remember" label="Remember me" formik={formik} />
            </div>
            <CustomBtn
              type="submit"
              text="log in"
              loading={loading}
              disabled={!formik.isValid}
              className="black-btn w-full mt-4"
            />
          </form>
          <LoginBottomForm />
        </div>
      </div>
    </>
  );
};

export default Login;

const LoginBottomForm = () => {
  return (
    <>
      <p className="mt-6 text-gray-3 flex-start-center gap-1">
        Don’t have an account ?
        <Link className="text-mainBlue font-semibold" href={routes.signup.path}>
          {routes.signup.title}
        </Link>
      </p>
      <Link className="text-mainBlue font-semibold mt-3 inline-block" href="#">
        Forget password
      </Link>
      <div className="w-full centering gap-2 mt-6">
        <span className="h-px bg-gray-3 flex-1"></span>
        <span>Or continue with</span>
        <span className="h-px bg-gray-3 flex-1"></span>
      </div>
      <div className="centering gap-3 mt-6">
        <span className="w-12 h-12 centering rounded-full bg-gray-100 cursor-pointer">
          <GoogleIcon />
        </span>
        <span className="w-12 h-12 centering rounded-full bg-gray-100 cursor-pointer">
          <TwitterIcon />
        </span>
      </div>
    </>
  );
};
