import React, { useEffect } from "react";
import Link from "next/link";
import Branding from "../../components/auth/Branding";
import InputBlock from "../../components/auth/InputBlock";
import UserIcon from "../../components/icons/UserIcon";
import MailIcon from "../../components/icons/MailIcon";
import KeyIcon from "../../components/icons/KeyIcon";
import Alert from "../../components/util/Alert";
import LoadingScreen from "../../components/util/LoadingScreen";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { useSingUp } from '../../services'
const SignUp = () => {
    
  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
        createUser(values);
    },
  });
  const {mutate:createUser, isLoading, isError}=useSingUp()
  const router = useRouter();

  if (isLoading)
      return <LoadingScreen />

  return (
    <div className="flex fixed top-0 left-0 w-screen lg:flex-row flex-col min-h-screen bg-white">
      <Branding />
      <div className=" relative flex-grow flex lg:min-h-screen lg:justify-center justify-items-start lg:p-0 p-12 items-center">
        {
          isError &&
          <Alert color="error">
              could not create the user
          </Alert>
        }
        <div className="max-w-xl flex-grow">
          <div className="mb-12">
            <h1 className="text-3xl text-dark text-left font-bold mb-3">
              Create an account
            </h1>
          </div>

          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="space-y-12 mb-12">
              <InputBlock
                name="fullName"
                variant="md"
                color="primary"
                label="FULL NAME"
                type="text"
                placeholder="Enter yout Name"
                icon={<UserIcon className="w-6 h-6" />}
                onChange={handleChange("fullName")}
              />
              <InputBlock
                name="email"
                variant="md"
                color="primary"
                label="EMAIL ADDRESS"
                placeholder="Enter your email"
                type="email"
                icon={<MailIcon className="w-6 h-6" />}
                onChange={handleChange("email")}
              />
              <InputBlock
                name="password"
                variant="md"
                color="primary"
                label="PASSWORD"
                placeholder="Enter your password"
                type="password"
                icon={<KeyIcon className="w-6 h-6" />}
                onChange={handleChange("password")}
              />
            </div>
            {/* disabled={state.isloading} */}
            <button
              type="submit"
              className="rounded-xl bg-primary text-gray-normal-50 font-bold py-4 px-8 mb-6"
            >
              Create an account
            </button>

            <div className="text-center text-gray-normal">
              Already have an account?
              <Link href="/auth/signin">
                <a className="text-secondary font-bold"> Sign In</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
