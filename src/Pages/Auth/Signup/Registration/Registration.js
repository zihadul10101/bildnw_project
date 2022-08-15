import React, { useState } from "react";
import CheckboxInput from "../../../../Components/Common/ui/CheckboxInput";
import UiButton from "../../../../Components/Common/ui/UiButton";
import { BsDownload } from 'react-icons/bs';
import { useTranslation } from "react-i18next";
import CompleteRegistrationBtn from "../../../../Components/Common/ui/CompleteRegistrartionBtn";

const registerBox = {
  boxShadow: "0px 10px 18px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31)"
}

const Registration = () => {
  const [isAgree, setIsAgree] = useState(false);
  const handleChange = (e) => {
    const agreeTerms = e.target.checked;
    setIsAgree(agreeTerms);
  };
  const handleRegistration = (e) => {
    e.preventDefault();
    if (isAgree === true) {
    }
  };

  const { t } = useTranslation();
  const baseRoot = localStorage.getItem("baseRoot");

  return (
    <>
      <div className="pt-14">
        <div className="px-8 py-12 rounded-xl w-6/12 mx-auto">
          <form onSubmit={handleRegistration}>
            <div className="text-center">
              <div className="border-2 bg-primary-4 shadow-lg shadow-gray-300  max-h-auto  ">
                <div className="px-6 py-8 ">
                  <div className="w-full p-5 h-96 overflow-y-scroll border-2 rounded-lg bg-primary-ash-light">
                    <h3 className="text-3xl text-primary-3 text-start font-bold mb-3">Credit line agreement
                    </h3>
                    <p className="text-justify">
                      Fermentum, cras et sed dolor mattis cras dui. Donec leo orci suspendisse morbi dignissim. Eu orci augue sem sagittis. Eget a, ut pretium mus. Donec mi amet diam sociis amet. Turpis erat sollicitudin non nunc, aliquet facilisis hendrerit. Vestibulum donec orci congue nullam facilisis dolor, at sem. Magna pharetra, quam consectetur turpis mi pellentesque elementum ultrices. Ut et imperdiet amet, massa.
                      Ultricies pulvinar eu, justo senectus sagittis, tortor, nisl. Varius suspendisse vel urna fermentum sem dictumst sit dictum. In lacus, sit eget egestas elementum tortor sit praesent. Diam ultricies dis est tellus viverra donec auctor vulputate mauris. Sodales odio consequat est sit magna. Bibendum porttitor quam habitant pharetra. Luctus varius eget condimentum sodales sagittis sed malesuada tortor. Orci quis justo, ut viverra fusce. Est ornare pretium, aliquam velit eros sollicitudin. Ac non imperdiet dignissim pulvinar sapien velit sed. Neque, eget rhoncus imperdiet gravida urna, aliquam. Pharetra, vitae netus mi urna cursus molestie lectus bibendum in. Quis donec donec eu, bibendum lacus. Etiam mus venenatis nunc enim. Velit in faucibus ultrices eget pellentesque at.
                      Egestas etiam dictum malesuada aliquam scelerisque ipsum. Elit, id nam turpis lorem bibendum morbi pretium risus. Suspendisse porttitor ornare viverra id consectetur a. Scelerisque eu nullam sapien nibh. Consectetur quis lorem mi ac urna tincidunt ut. Ornare velit vivamus ac est. Egestas turpis non facilisis facilisis viverra hendrerit diam.
                      Leo quis velit condimentum eros, pharetra, mauris donec et sed. Pulvinar ultricies ante ac nisi aliquam, in scelerisque. Natoque pellentesque quam egestas tellus metus accumsan erat. Pellentesque pretium egestas nunc dui, in lorem sed nunc. Fringilla fames varius gravida arcu, id eget. Habitasse dignissim eu faucibus iaculis. Eu vitae dolor est tristique purus vitae lobortis accumsan congue. Varius pretium nullam cras montes, lacus. Pulvinar est, lectus accumsan, viverra.
                      Ut lectus in fusce tincidunt condimentum interdum sed nulla. A in id molestie ut eget lorem pretium. Lorem id lectus adipiscing in est iaculis. Fermentum urna nisi sit sit rhoncus, mattis sapien viverra. Aliquet vitae et enim, quam et at. Cras et ultricies tristique massa velit, est, nisl, placerat donec. Eget consequat, adipiscing posuere est vel pellentesque semper mollis turpis. A at eu nec sed nullam sit ullamcorper porttitor. Nullam auctor nunc et praesent nunc purus lectus sit. Eget tortor in ut ultricies neque tortor. In aenean vitae nulla est a lorem dictum consectetur.
                    </p>
                  </div>
                </div>
                <div className="flex p-4">
                  <CheckboxInput name="isAgree" onChange={handleChange} />
                  <p className="py-2 text-[#091E42] font-normal">
                    I have read the above agreement and agree to allow Bildnw to
                    gather data related to my comapny (CR XXXXXXXXX) from Simah.
                  </p>
                </div>
                {/* <div className="first-box-title h-3/12"> */}
                  <div className="text-center p-3 ml-4">
                    {/* <Link to="/verification"> */}
                    {/* <UiButton label="Complete registration" /> */}
                    <CompleteRegistrationBtn label="Complete registration"></CompleteRegistrationBtn>
                    {/* </Link> */}
                  </div>
                {/* </div> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;