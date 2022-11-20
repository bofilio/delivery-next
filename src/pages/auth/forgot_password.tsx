import React, { useContext, useState, useEffect } from "react";
import Branding from "../../components/auth/Branding";
import InputBlock from "../../components/auth/InputBlock";
import MailIcon from "../../components/icons/MailIcon";
import ForgotPasswordModal from "../../components/auth/modals/ForgotPasswordModal";
import Modal from "../../components/modals/Modal";
import OpenModal from "../../components/modals/OpenModal";
import { ModalProvider } from "../../contexts/ModalContext";
import Alert from "../../components/util/Alert";
import { useRouter } from "next/router";
import {useFormik} from"formik";
import { useUser } from "../../services";
import LoadingScreen from "../../components/util/LoadingScreen";
const ForgotPassword = ({ emailadress }) => {

    const {handleChange,handleSubmit,values, errors}=useFormik(
        {
            initialValues: {
              email: "",
            },
            onSubmit: (values) => {
                fetchUser(values)                                             
            },
          }
    )   
const {isError,isLoading,data:user,mutate:fetchUser}=useUser(values);


  const router = useRouter();


  return (
    <>
      <div className="flex lg:flex-row flex-col fixed top-0 left-0 w-screen bg-white min-h-screen">
        {
                   isLoading && <LoadingScreen />
                }
        <Branding />
        <div className=" relative flex-grow flex lg:min-h-screen lg:justify-center justify-items-start lg:p-0 p-12 lg:items-center">
          <div className="max-w-xl flex-grow">
            <div className="mb-12">
              <h1 className="text-3xl text-dark text-left font-bold mb-3">
                Forget password?
              </h1>
              <span className="text-xl text-gray-normal">
                Please enter your email address to continue{" "}
              </span>
            </div>
            <form
              className="flex flex-col space-y-12"
              onSubmit={handleSubmit}
            >
              {/*<!-- component-->*/}
              <InputBlock
                name="email"
                variant="md"
                color="primary"
                placeholder="Enter your email adress"
                label="EMAIL ADDRESS"
            onChange={handleChange("email")}
                type="email"
                icon={<MailIcon className="w-6 h-6" />}
              />
              {/*modal*/}
              <ModalProvider>
                <OpenModal>
                  <button
                    type="submit"
                    className="w-full text-center rounded-xl bg-primary text-text-light text-base font-bold py-4 px-8"
                  >
                    Continue
                  </button>
                </OpenModal>

                <ForgotPasswordModal errormsg={isError?"try again":""} email={"email"} />
              </ModalProvider>
              <button
                onClick={router.back}
                className="w-full text-center rounded-xl bg-transparent-primary text-primary text-base font-bold py-4 px-8"
              >
                Back
              </button>
            </form>
          </div>
        </div>
      </div>
      {/*<!--Modal-- >*/}
    </>
  );
};

export default ForgotPassword;
