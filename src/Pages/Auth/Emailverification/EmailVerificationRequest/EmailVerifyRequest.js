import React from "react";
import AuthLayout from "../../../../Layout/AuthLayout";

const EmailVerifyRequest = () => {
  return (
    <AuthLayout>
      <div className="mt-16 flex w-4/4 mx-auto items-center border-2 border-borderColor rounded-lg bg-red-300">
        <h3 className="p-4 text-xl bg-red-300 text-center">
          Please verify your email. We send an mail on your email address.
        </h3>
      </div>
    </AuthLayout>
  );
};

export default EmailVerifyRequest;
