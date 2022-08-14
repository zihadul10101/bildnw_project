import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { EmailVerifiedAction } from "../../../../Services/Actions/AuthAction/signUpAction";
import AuthLayout from "../../../../Layout/AuthLayout";

const VerifiedEmail = () => {
  const { user_id } = useParams();

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const payload = {
      user_id: user_id,
      link: "http://159.89.198.52" + location.pathname,
    };
    dispatch(EmailVerifiedAction(payload, navigate));
  }, []);
  return (
    <AuthLayout>
      <div className="mt-16 flex w-4/4 mx-auto items-center border-2 border-borderColor rounded-lg bg-red-300">
        <h3 className="p-4 text-xl bg-green-300 text-center">
          Your email is verified.
        </h3>
      </div>
    </AuthLayout>
  );
};

export default VerifiedEmail;
