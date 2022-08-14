import React from "react";
import StaffNavbar from "../Components/Common/shared/StaffNavbar";

const StaffPortalLayout = ({ children, ...rest }) => {
  return (
    <>
      <StaffNavbar />
      <div className="w-[90%] mx-auto">{children}</div>
    </>
  );
};

export default StaffPortalLayout;
