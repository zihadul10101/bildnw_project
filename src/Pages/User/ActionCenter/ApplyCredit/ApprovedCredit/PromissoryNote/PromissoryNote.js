import React, { useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSelector, useDispatch } from "react-redux";
import { AcceptCreditOffer } from "../../../../../../Services/Actions/ActionCenterActions/ApplyCreditAction";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MainLayout from "../../../../../../Layout/MainLayout";
import CheckboxInput from "../../../../../../Components/Common/ui/CheckboxInput";
import UiButton from "../../../../../../Components/Common/ui/UiButton";

const PromissoryNote = () => {
  const {t} = useTranslation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { client_details } = useSelector((state) => state.LogInfo);
  const { get_credit_offer, accept_credit_offer } = useSelector((state) => state.ApplyCredit);
  const client_id = client_details.client_details?.id;
  const [isAgree, setIsAgree] = useState(false);

  const handleChange = (e) => {
    const agreeTerms = e.target.checked;
    setIsAgree(agreeTerms);
  };

  const handleTermsCondition = (e) => {
    e.preventDefault();
    if (isAgree) {
      dispatch(AcceptCreditOffer(client_details.client_details?.id, get_credit_offer?.id, navigate));
    } else {
      toast.error("Please check the agreement", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    }
  };
  // if(isAgree && accept_credit_offer?.credit_id){
  //   navigate("/action-center/approved-purchase")
  // }
  return (
    <>
      <MainLayout>
        <div className="px-20 py-6 border-b-[3px] border-borderColor">
          <h3 className="text-2xl font-bold">
            {t('view_sign_promissory_note')}
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
                laborum. Perspiciatis minima nesciunt dolorem! Officiis iure
                rerum voluptates a cumque velit quibusdam sed amet tempora. Sit
                laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim
                commodi iusto libero magni deleniti quod quam consequuntur!
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
              <UiButton label={t('finish')}></UiButton>
            </div>
          </form>
        </div>
      </MainLayout>
    </>
  );
};

export default PromissoryNote;
