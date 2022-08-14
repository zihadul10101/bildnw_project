import React, { useEffect, useRef, useState } from "react";
import MainLayout from "../../../../Layout/MainLayout";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useSelector, useDispatch } from "react-redux";
import {
  AccessRevoke,
  CompanyInfos,
  InvitedEmail,
} from "../../../../Services/Actions/AccountAction/AccountAction";
import UiInput from "../../../../Components/Common/ui/UiInput";
import UiButton from "../../../../Components/Common/ui/UiButton";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../../../Assets/Styles/scss/companyDetails.scss";
import DocumentIcon from "../../../../Assets/images/document.svg";
import DocIcon from "../../../../Assets/images/docIcon.svg";
import AddUserIcon from "../../../../Assets/images/addUser.svg";
import UserIcon from "../../../../Assets/images/user.svg";
import Editicon from "../../../../Assets/images/editicon.svg";
import RevokIcon from "../../../../Assets/images/revok.svg";

const CompanyInfo = () => {

  const [show, setShow] = useState('show');
  const [show1, setShow1] = useState('');
  const [show2, setShow2] = useState('');
  const baseRoot = localStorage.getItem("baseRoot");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { client_details } = useSelector((state) => state.LogInfo);
  const { client_all_info, colleagues_info } = useSelector(
    (state) => state.UserAccount
  );


  const [clientDetails, setClientDetails] = useState({});
  const [inputValue, setInputValue] = useState({});
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);

  // language
  const { t, i18n } = useTranslation();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(() => {
    setClientDetails(client_details.client_details);
    dispatch(CompanyInfos(client_details.client_details?.id));
  }, []);

  const inviteUser = (event) => {
    event.preventDefault();
    const today = new Date();
    let CurrentDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let CurrentTime =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    let timeStamp = 1234567890;
    var date = new Date();
    let minutes = "0" + date.getSeconds(timeStamp);


    const user_id = localStorage.getItem("user_id");
    const invitePayload = {
      invited_email: inputValue.invited_email,
      // invitation_link: `http://localhost:3000/invited-user-registration/${CurrentTime}/${client_details.client_details?.id}`,
      invitation_link: `http://159.89.198.52/invited-user-registration/${CurrentTime}/${client_details.client_details?.id}`,
    };
    dispatch(InvitedEmail(client_details.client_details?.id, user_id, invitePayload));

  };

  const revokeAccess = (user_id) => {
    dispatch(AccessRevoke(client_details.client_details?.id, user_id));
  };

  const handleUpdateCompanyInfo = () => {
    navigate(`/action-center/company-info/update/${client_details.client_details?.id}`)
  };

  let activeStyle = {
    // textDecoration: "underline",
    borderBottom: "4px solid #00B09E",
    color: "#00B09E",
    paddingBottom: "8px",
    cursor: 'pointer'
  };
  return (
    <MainLayout>
      <div className="px-10 py-10 ">

        <div className=" border-2 shadow-lg shadow-gray-300 max-h-auto  rounded">
          <div className="first-box-title h-3/12">
            <div className=" flex gap-3 text-primary-ash-400 cursor-pointer font-semibold px-4 py-6 border-b-2 ">

              <p onClick={() => { setShow('show'); setShow1(''); setShow2(''); }} className={`${show === 'show' ? 'text-primary-1  cursor-pointer underline decoration-4  decoration-solid decoration-primary-1' : 'border-b-2'}`}>{t(' Company Details')}</p>
              <p onClick={() => { setShow1('show1'); setShow(''); setShow2('') }} className={`${show1 === 'show1' ? 'text-primary-1 cursor-pointer underline decoration-4 decoration-solid decoration-primary-1' : 'border-b-2'}`} >{t('Company Documentation')} </p>
              <p onClick={() => { setShow2('show2'); setShow(''); setShow1('') }} className={`${show2 === 'show2' ? 'text-primary-1 cursor-pointer underline decoration-4 decoration-solid decoration-primary-1' : 'border-b-2'}`}>{t('Your Colleagues')}</p>
            </div>
          </div>
          {
            show === 'show' && <>
              <div className="px-6 py-8 h-6/12">
                <div className="w-full p-5 h-96 overflow-y-scroll border-4 rounded-lg bg-[#EBECF0]">
                  <p className="text-justify p-3">
                    <h3 className="text-xl font-semibold mb-3">
                      Company Details
                    </h3>


                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit faucibus feugiat condimentum convallis faucibus tempus nunc risus. Ut aliquam augue potenti dictumst. Tellus senectus pellentesque habitasse imperdiet nulla amet amet praesent sed. Amet urna a, integer aliquet cursus.
                    <br />
                    Fermentum, cras et sed dolor mattis cras dui. Donec leo orci suspendisse morbi dignissim. Eu orci augue sem sagittis. Eget a, ut pretium mus. Donec mi amet diam sociis amet. Turpis erat sollicitudin non nunc, aliquet facilisis hendrerit. Vestibulum donec orci congue nullam facilisis dolor, at sem. Magna pharetra, quam consectetur turpis mi pellentesque elementum ultrices. Ut et imperdiet amet, massa.
                    <br />
                    Ultricies pulvinar eu, justo senectus sagittis, tortor, nisl. Varius suspendisse vel urna fermentum sem dictumst sit dictum. In lacus, sit eget egestas elementum tortor sit praesent. Diam ultricies dis est tellus viverra donec auctor vulputate mauris. Sodales odio consequat est sit magna. Bibendum porttitor quam habitant pharetra. Luctus varius eget condimentum sodales sagittis sed malesuada tortor. Orci quis justo, ut viverra fusce. Est ornare pretium, aliquam velit eros sollicitudin. Ac non imperdiet dignissim pulvinar sapien velit sed. Neque, eget rhoncus imperdiet gravida urna, aliquam. Pharetra, vitae netus mi urna cursus molestie lectus bibendum in. Quis donec donec eu, bibendum lacus. Etiam mus venenatis nunc enim. Velit in faucibus ultrices eget pellentesque at.
                    <br />
                    Egestas etiam dictum malesuada aliquam scelerisque ipsum. Elit, id nam turpis lorem bibendum morbi pretium risus. Suspendisse porttitor ornare viverra id consectetur a. Scelerisque eu nullam sapien nibh. Consectetur quis lorem mi ac urna tincidunt ut. Ornare velit vivamus ac est. Egestas turpis non facilisis facilisis viverra hendrerit diam.
                    Leo quis velit condimentum eros, pharetra, mauris donec et sed. Pulvinar ultricies ante ac nisi aliquam, in scelerisque. Natoque pellentesque quam egestas tellus metus accumsan erat. Pellentesque pretium egestas nunc dui, in lorem sed nunc. Fringilla fames varius gravida arcu, id eget. Habitasse dignissim eu faucibus iaculis. Eu vitae dolor est tristique purus vitae lobortis accumsan congue. Varius pretium nullam cras montes, lacus. Pulvinar est, lectus accumsan, viverra.
                    Ut lectus in fusce tincidunt condimentum interdum sed nulla. A in id molestie ut eget lorem pretium. Lorem id lectus adipiscing in est iaculis. Fermentum urna nisi sit sit rhoncus, mattis sapien viverra. Aliquet vitae et enim, quam et at. Cras et ultricies tristique massa velit, est, nisl, placerat donec. Eget consequat, adipiscing posuere est vel pellentesque semper mollis turpis. A at eu nec sed nullam sit ullamcorper porttitor. Nullam auctor nunc et praesent nunc purus lectus sit. Eget tortor in ut ultricies neque tortor. In aenean vitae nulla est a lorem dictum consectetur.              </p>
                </div>
                <div className="first-box-title py-6 h-3/12">

                  <button className="flex justify-center items-center bg-slate-700 text-white  ml-5 border-2 border-slate-700 rounded px-2 py-2 text-slate  ">
                    <img src={Editicon} alt="" className="w-5 h-5 mr-2" /> Download Agreement </button>

                </div>
              </div>
            </>
          }
          {
            show1 === 'show1' &&
            <>
              <div className="px-6 py-8 h-6/12">
                <div className="w-[521px] h-80 overflow-y-scroll border-4 rounded-lg">
                  <div className="flex justify-between p-3 border-2">
                    <div className="flex items-center gap-x-2   text-center">
                      <div className=" ">
                        <img src={DocumentIcon} alt="" className="w-4 h-5 " />
                      </div>
                      <div className="px-1">
                        <h4 className="text-lg font-normal text-primary-1">
                          {t("association_article")}
                        </h4>
                        <h4 className="text-sm font-normal font-poppins text-gray-600">Financial Papers.pdf -10MB</h4>

                      </div>
                    </div>
                    <span className="text-blue-normal">
                      <a
                        href={baseRoot + client_all_info.ref_article_of_association}
                        target="_blank"
                      >
                        {t("download")}
                      </a>

                    </span>
                  </div>
                  <div className="flex justify-between p-3 border-2">
                    <div className="flex items-center gap-x-2   text-center">
                      <div className=" ">
                        <img src={DocumentIcon} alt="" className="w-4 h-5 " />
                      </div>
                      <div className="px-1">
                        <h4 className="text-lg font-normal text-primary-1">
                          {t("national_address")}
                        </h4>
                        <h4 className="text-sm font-normal font-poppins text-gray-600">Financial Papers.pdf -10MB</h4>

                      </div>
                    </div>
                    <span className="text-blue-normal">
                      <a
                        href={baseRoot + client_all_info.ref_national_address}
                        target="_blank"
                      >
                        {t("download")}
                      </a>

                    </span>
                  </div>
                  <div className="flex justify-between p-3 border-2">
                    <div className="flex items-center gap-x-2   text-center">
                      <div className=" ">
                        <img src={DocumentIcon} alt="" className="w-4 h-5 " />
                      </div>
                      <div className="px-1">
                        <h4 className="text-lg font-normal text-primary-1">
                          {t("cr_number")}
                        </h4>
                        <h4 className="text-sm font-normal font-poppins text-gray-600">Financial Papers.pdf -10MB</h4>

                      </div>
                    </div>
                    <span className="text-blue-normal">
                      <a
                        href={baseRoot + client_all_info.ref_commercial_reg}
                        target="_blank"
                      >
                        {t("download")}
                      </a>

                    </span>
                  </div>
                  <div className="flex justify-between p-3 border-2">
                    <div className="flex items-center gap-x-2   text-center">
                      <div className=" ">
                        <img src={DocumentIcon} alt="" className="w-4 h-5 " />
                      </div>
                      <div className="px-1">
                        <h4 className="text-lg font-normal text-primary-1">
                          {t("vat_registration")}
                        </h4>
                        <h4 className="text-sm font-normal font-poppins text-gray-600">Financial Papers.pdf -10MB</h4>

                      </div>
                    </div>
                    <span className="text-blue-normal">
                      <a
                        href={baseRoot + client_all_info.ref_commercial_reg}
                        target="_blank"
                      >
                        {t("download")}
                      </a>


                    </span>
                  </div>

                  <div className="flex justify-between p-3 border-2">
                    <div className="flex items-center gap-x-2   text-center">
                      <div className=" ">
                        <img src={DocumentIcon} alt="" className="w-4 h-5 " />
                      </div>
                      <div className="px-1">
                        <h4 className="text-lg font-normal text-primary-1">
                          {t("nitaqaat_certificate")}
                        </h4>
                        <h4 className="text-sm font-normal font-poppins text-gray-600">Financial Papers.pdf -10MB</h4>

                      </div>
                    </div>
                    <span className="text-blue-normal">
                      <a
                        href={baseRoot + client_all_info.ref_nitaqaat_certificate}
                        target="_blank"
                      >
                        {t("download")}
                      </a>

                    </span>
                  </div>
                  <div className="flex justify-between p-3 border-2">
                    <div className="flex items-center gap-x-2   text-center">
                      <div className=" ">
                        <img src={DocumentIcon} alt="" className="w-4 h-5 " />
                      </div>
                      <div className="px-1">
                        <h4 className="text-lg font-normal text-primary-1">
                          {t("gosi_certificate")}
                        </h4>
                        <h4 className="text-sm font-normal font-poppins text-gray-600">Financial Papers.pdf -10MB</h4>

                      </div>
                    </div>
                    <span className="text-blue-normal">
                      <a
                        href={baseRoot + client_all_info.ref_gosi_certificate}
                        target="_blank"
                      >
                        {t("download")}
                      </a>


                    </span>
                  </div>
                  <div className="flex justify-between p-3 border-2">
                    <div className="flex items-center gap-x-2   text-center">
                      <div className=" ">
                        <img src={DocumentIcon} alt="" className="w-4 h-5 " />
                      </div>
                      <div className="px-1">
                        <h4 className="text-lg font-normal text-primary-1">
                          {t("investment_certificate")}
                        </h4>
                        <h4 className="text-sm font-normal font-poppins text-gray-600">Financial Papers.pdf -10MB</h4>

                      </div>
                    </div>
                    <span className="text-blue-normal">
                      <a
                        href={baseRoot + client_all_info.ref_investment_license}
                        target="_blank"
                      >
                        {t("download")}
                      </a>



                    </span>
                  </div>
                  <div className="flex justify-between p-3 border-2">
                    <div className="flex items-center gap-x-2   text-center">
                      <div className=" ">
                        <img src={DocumentIcon} alt="" className="w-4 h-5 " />
                      </div>
                      <div className="px-1">
                        <h4 className="text-lg font-normal text-primary-1">
                          {t("client_profile")}                        </h4>
                        <h4 className="text-sm font-normal font-poppins text-gray-600">Financial Papers.pdf -10MB</h4>

                      </div>
                    </div>
                    <span className="text-blue-normal">
                      <a
                        href={baseRoot + client_all_info.ref_client_profile}
                        target="_blank"
                      >
                        {t("download")}
                      </a>




                    </span>
                  </div>
                  <div className="flex justify-between p-3 border-2">
                    <div className="flex items-center gap-x-2   text-center">
                      <div className=" ">
                        <img src={DocumentIcon} alt="" className="w-4 h-5 " />
                      </div>
                      <div className="px-1">
                        <h4 className="text-lg font-normal text-primary-1">
                          {t("iban_letter")}
                        </h4>
                        <h4 className="text-sm font-normal font-poppins text-gray-600">Financial Papers.pdf -10MB</h4>

                      </div>
                    </div>
                    <span className="text-blue-normal">
                      <a
                        href={baseRoot + client_all_info.ref_iban_letter}
                        target="_blank"
                      >
                        {t("download")}
                      </a>
                    </span>
                  </div>
                  <div className="flex justify-between p-3 border-2">
                    <div className="flex items-center gap-x-2   text-center">
                      <div className=" ">
                        <img src={DocumentIcon} alt="" className="w-4 h-5 " />
                      </div>
                      <div className="px-1">
                        <h4 className="text-lg font-normal text-primary-1">
                          {t("finance_statement_1y")}
                        </h4>
                        <h4 className="text-sm font-normal font-poppins text-gray-600">Financial Papers.pdf -10MB</h4>

                      </div>
                    </div>
                    <span className="text-blue-normal">
                      <a
                        href={baseRoot + client_all_info.ref_1y_finance_statement}
                        target="_blank"
                      >
                        {t("download")}
                      </a>

                    </span>
                  </div>
                  <div className="flex justify-between p-3 border-2">
                    <div className="flex items-center gap-x-2   text-center">
                      <div className=" ">
                        <img src={DocumentIcon} alt="" className="w-4 h-5 " />
                      </div>
                      <div className="px-1">
                        <h4 className="text-lg font-normal text-primary-1">
                          {t("bank_statement")}
                        </h4>
                        <h4 className="text-sm font-normal font-poppins text-gray-600">Financial Papers.pdf -10MB</h4>

                      </div>
                    </div>
                    <span className="text-blue-normal">
                      <a
                        href={baseRoot + client_all_info.ref_1y_bank_statement}
                        target="_blank"
                      >
                        {t("download")}
                      </a>
                    </span>
                  </div>
                </div>



                <div className="first-box-title py-6 h-3/12">

                  <button onClick={() => handleUpdateCompanyInfo()} className="flex justify-center items-center bg-slate-700 text-white  ml-5 border-2 border-slate-700 rounded px-2 py-2 text-slate  ">
                    <img src={DocIcon} alt="" className="w-5 h-5 mr-2 " /> Update company documentation (admin only) </button>

                </div>
              </div>
            </>
          }
          {
            show2 === 'show2' &&
            <div className="px-6 py-8 h-6/12">
              <div className="w-[521px] h-80 overflow-y-scroll border-4 rounded-lg">
                <div className="first-box-title py-6 h-3/12">

                  <button onClick={() => setOpen(true)} className="flex justify-center items-center bg-primary-1 text-white  ml-5  rounded px-2 py-2 text-slate  ">
                    <img src={AddUserIcon} alt="" className="w-5 h-5 mr-2 " /> Add new member to your bildnw team </button>
                  <div className="w-3/6">
                    <Modal
                      ref={modalRef}
                      open={open}
                      onClose={() => setOpen(false)}
                      initialFocusRef={modalRef}
                      center
                    >
                      <div className="block text-xl cursor-pointer flex items-center gap-x-3 mx-auto  p-3 text-center  rounded-sm">
                        <img src={UserIcon} alt="" className="w-5 h-5" />

                        <p className="font-bold">Team Invite</p>
                      </div>
                      <h1 className="px-3">Please enter the user’s email you want to invite to bildnw team</h1>
                      <form className="px-3" action="#" onSubmit={inviteUser}>
                        <UiInput
                          name="invited_email"
                          onChange={handleChange}
                          label={t("invited_email")}
                        ></UiInput>
                        <div className="text-center">
                          <UiButton type="submit" label={t("invite_user")}></UiButton>
                        </div>
                      </form>
                    </Modal>
                  </div>

                </div>
                <div className="flex justify-between p-3 border-2">
                  {colleagues_info.length > 0
                    ? colleagues_info.map((allColleagues, index) => (
                      <div className="flex items-center gap-x-2   text-center">
                        <div className=" ">
                          <img src={UserIcon} alt="" className="w-4 h-5 " />
                        </div>
                        <div className="px-1">
                          <h4 className="text-lg font-normal text-blue-normal">
                            {allColleagues?.name}
                          </h4>
                          <h4 className="text-sm font-normal font-poppins VP Engineering">

                            {allColleagues?.get_position}, {allColleagues?.email}
                          </h4>

                        </div>
                        <div className="flex items-center gap-x-2   text-center">
                          <div className=" ">
                            <img onClick={() => revokeAccess(allColleagues.user_id)} src={RevokIcon} alt="" className="w-5 h-5 " />
                          </div>
                          <div className="px-1">
                            <h4 className="text-lg font-normal text-slate-400">
                              Revok Access
                            </h4>

                          </div>
                        </div>
                      </div>

                    ))
                    : <h3 className="p-4 text-xl text-center">colleagues Not found</h3>}




                </div>


              </div>

            </div>
          }

        </div>
      </div>
    </MainLayout>
  );
};

export default CompanyInfo;
