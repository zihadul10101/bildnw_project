import React from "react";
import AuthNavbar from "../Components/Common/shared/AuthNavbar";
import Footer from "../Components/Common/shared/Footer";

const AuthLayout = ({ children, ...rest }) => {
  return (
    <>
      <AuthNavbar />
      <div className="flex justify-center items-center min-h-96 w-4/12 mx-auto">
        {children}
      </div>
      
      {/* <Footer /> */}
    </>
  );
};

export default AuthLayout;
