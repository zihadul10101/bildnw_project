import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import CheckboxInput from "../../../../../../Components/Common/ui/CheckboxInput";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import MainLayout from "../../../../../../Layout/MainLayout";
import UiButton from "../../../../../../Components/Common/ui/UiButton";

const AgreementCreditLine = () => {
  const {t} = useTranslation();

  const navigate = useNavigate();
  const [isAgree, setIsAgree] = useState(false);

  const handleChange = (e) => {
    const agreeTerms = e.target.checked;
    setIsAgree(agreeTerms);
  };

  const handleTermsCondition = (e) => {
    e.preventDefault();
    if (isAgree) {
      navigate("/action-center/promissory-note/");
    } else {
      toast.error("Please check the agreement", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
    })
    }
  };
  return (
    <>
      <MainLayout>
        <div className="px-20 py-6 border-b-[3px] border-borderColor">
          <h3 className="text-2xl font-bold">
            {t('view_sign_creditline')}
          </h3>
        </div>
        <div className="w-full px-16 py-10">
          <div className="pb-6 text-center">
            <div className="w-full h-56 overflow-y-scroll border-4 rounded-lg">
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
                laborum. Perspiciatis minima nesciunt dolorem! Officiis iure.
                quibusdam recusandae alias error harum maxime adipisci amet
                laborum. Perspiciatis minima nesciunt dolorem! Officiis iure.
              </p>
            </div>
          </div>
          <div></div>
          <form onSubmit={handleTermsCondition}>
            <div className="text-center flex space-x-4">
              <CheckboxInput
                name="isAgree"
                onChange={handleChange}
                label={t('i_agree')}
              ></CheckboxInput>
            </div>
            <div className="text-center my-8">
              <UiButton label={t('next')}></UiButton>
            </div>
          </form>
        </div>
      </MainLayout>
    </>
  );
};

export default AgreementCreditLine;
