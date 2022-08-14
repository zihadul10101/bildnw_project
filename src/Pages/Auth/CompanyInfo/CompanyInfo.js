import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
import {
  userCreate,
  userCreateAction,
} from "../../../Services/Actions/AuthAction/signUpAction";
import AuthLayout from "../../../Layout/AuthLayout";
import UiButton from "../../../Components/Common/ui/UiButton";
import CheckboxInput from "../../../Components/Common/ui/CheckboxInput";
import UiInput from "../../../Components/Common/ui/UiInput";
import SelectInput from "../../../Components/Common/ui/SelectInput";
import UiLargeArrowButton from "../../../Components/Common/ui/UiLargeArrowButton";

const CompanyInfo = () => {
  const { signupData } = useSelector((state) => state.SignUpInfo);
  const navigate = useNavigate();
  const [registrationPage, setRegistrationPage] = useState(false);
  const [isAgree, setIsAgree] = useState(false);
  const [isSimah, setIsSimah] = useState(false);
  const [companyInfo, setCompanyInfo] = useState({});
  const handleChange = (e) => {
    setIsSimah(e.target.checked);
    const { name, value } = e.target;
    setCompanyInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCompanyDetails = (e) => {
    e.preventDefault();
    if (
      isSimah === true &&
      companyInfo.companyName &&
      companyInfo.crNumber &&
      companyInfo.companyType
    ) {
      setRegistrationPage(true);
    }
  };
  const agreement = `I have read the above agreement and agree to allow Bildnw to
  gather data related to my comapny CR ${companyInfo.crNumber} from Simah.`;

  const handleTermsCondition = (e) => {
    const agreeTerms = e.target.checked;
    setIsAgree(agreeTerms);
  };
  const dispatch = useDispatch();
  const handleRegistration = (e) => {
    e.preventDefault();
    if (isAgree === true) {
      const companyDetailsInfo = {
        client: companyInfo.companyName,
        cr_number: companyInfo.crNumber,
        company_type: companyInfo.companyType,
        // finding_source: companyInfo.finding_source,
        is_simah: isSimah,
        is_agreed: isAgree,
        name: signupData.name,
        email: signupData.email,
        password: signupData.password,
        phone: signupData.phone,
        position: signupData.position,
        two_factor: true,
        status: 2,
      };

      // TIMESTAMP
      parseInt(+new Date() / 1000);
      let timeStamp = (+new Date()).toString().substring(0, 10);

      const emailVerification = {
        timeStamp: timeStamp,
      };

      dispatch(userCreateAction(companyDetailsInfo, navigate, timeStamp));
    }
  };
  return (
    <AuthLayout>
      {registrationPage === false ? (
        <div className="w-full py-4 shadow-lg shadow-slate-300 m-4 p-3">
          <div className="">
            <div className="pb-6 text-center">
              <h3 className="text-xl font-medium text-primary-8">Company Details</h3>
            </div>
            <form onSubmit={handleCompanyDetails}>
              <UiInput
                label="Company Name"
                type="text"
                name="companyName"
                onChange={handleChange}
              ></UiInput>
              <UiInput
                label="Commercial registration (CR) number"
                type="text"
                name="crNumber"
                onChange={handleChange}
              ></UiInput>
              {/* <UiInput
                label="Finding source"
                type="text"
                name="finding_source"
                placeholder="Add finding source"
                onChange={handleChange}
              ></UiInput> */}
              <SelectInput
                name="companyType"
                onChange={handleChange}
              ></SelectInput>

              <UiInput
                label="What is your position at the company?"
                type="text"
                name="position"
                onChange={handleChange}
              ></UiInput>


              <div className="text-center flex space-x-4">
                <CheckboxInput
                  name="isLegalAuthority"
                  onChange={handleChange}
                  label="I hereby declare that I have the legal authority to sign on
                behalf of the company whose CR is entered above."
                ></CheckboxInput>
              </div>
              <div className="text-center my-8">
                {/* <Link to="/registration"> */}
                {/* <UiButton label="Next"></UiButton> */}
                <UiLargeArrowButton label="Next" ></UiLargeArrowButton>
                {/* </Link> */}
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="w-full py-12">
          <div className="pb-6 text-center">
            <h3 className="text-5xl text-blue-light pb-8">Register</h3>
            <div className="w-full h-96 overflow-y-scroll border-4 rounded-lg">
              <p className="text-justify p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
                Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                sapiente officiis modi at sunt excepturi expedita sint? Sed
                quibusdam recusandae alias error harum maxime adipisci amet
                laborum. Perspiciatis minima nesciunt dolorem! Officiis iure
                rerum voluptates a cumque velit quibusdam sed amet tempora. Sit
                laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim
                commodi iusto libero magni deleniti quod quam consequuntur!
                Commodi minima excepturi repudiandae velit hic maxime
                doloremque. Quaerat provident commodi consectetur veniam
                similique ad earum omnis ipsum saepe, voluptas, hic voluptates
                pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
                excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
                Voluptatem quaerat non architecto ab laudantium modi minima sunt
                esse temporibus sint culpa, recusandae aliquam numquam totam
                ratione voluptas quod exercitationem fuga. Possimus quis earum
                veniam quasi aliquam eligendi, placeat qui corporis!
              </p>
            </div>
          </div>
          <div></div>
          <form onSubmit={handleRegistration}>
            <div className="text-center flex space-x-4">
              <CheckboxInput
                name="isAgree"
                onChange={handleTermsCondition}
                label={agreement}
              ></CheckboxInput>
            </div>
            <div className="text-center my-8">
              {/* <Link to="/verification"> */}
              <UiButton label="Complete registration"></UiButton>
              {/* </Link> */}
            </div>
          </form>
        </div>
      )}
    </AuthLayout>
  );
};

export default CompanyInfo;