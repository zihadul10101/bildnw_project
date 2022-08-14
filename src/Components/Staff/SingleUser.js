import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { statusDetails } from "../../Services/Constants/statusHandle";
import UiProgress from "../Common/ui/UiProgress";
import useAxios from "../../Services/Api/Hooks/AxiosHook";

const SingleUser = (props) => {
  const axiosInstance = useAxios();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user_detail } = useSelector((state) => state.LogInfo);
  const client = props.user;
  let cliendId = client.client_id;

  const staffDetails = (e) => {
    navigate(`/staff-portal/client-details/${e}`);
    localStorage.setItem("client_id", e);
  };
  const statusDetail = statusDetails(client.status);
  const Authtoken = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");
  const [assignee, setAssignee] = useState();

  // To post the data
  const postData = { client: cliendId, staff: userId };
  const assingToMe = async () => {
    try {
      const data = await axiosInstance.post("/staffs/assign", postData, {
        headers: { Authorization: `JWT ${Authtoken}` },
      });

      setAssignee(user_detail.name);
      toast.success(`${data.data.details} to you`, { autoClose: 2000 });
    } catch (error) {
      toast.error(error.message, { autoClose: 2000 });
    }
  };

  return (
    <div className="w-full mt-10 pb-5 pr-3 flex flex-col items-center h-40 ">
      {/* List */}
      <div className="border-4 border-black p-4 mb-5 h-44 w-full">
        <div className="my-1">
          <UiProgress
            status={t(statusDetail.status)}
            width="70%"
            bgcolor="bg-violet-600"
          />
        </div>
        <div className="w-full h-6 my-2">
          <span
            className="text-xs  inline-block py-1 px-2 uppercase rounded text-white bg-sky-400"
            style={{ backgroundColor: `rgb(${statusDetail.color})` }}
          >
            {t("next")}: {t(statusDetail.next_step)}
          </span>
          <span className="text-xs  inline-block py-1 px-2 ml-2 uppercase rounded text-white bg-gray-500">
            {t("assignee")}:{" "}
            {assignee || (client.get_assign_to ? client.get_assign_to : "None")}
          </span>
        </div>
        <div className="grid grid-cols-10">
          <div className="col-span-6">
            <h1 className="font-medium leading-tight text-3xl mt-2 mb-2 text-blue-600">
              {client.client} (CR {client.cr_number})
            </h1>
            <p className="text-gray-400">
              <span className="font-medium text-gray-500">{t("latest")}:</span>{" "}
              Last event will be shown here
            </p>
          </div>
          <div className="col-span-4 flex items-center justify-around space-x-2">
            <button
              onClick={assingToMe}
              className="rounded border-2 border-dark-gray whitespace-nowrap  bg-transparent py-2 px-3  hover:text-gray-600 duration-100 ease-in-out"
            >
              {t("assign_to_me")}
            </button>
            <button className="rounded border-2 border-dark-gray whitespace-nowrap  bg-transparent py-2 px-3  hover:text-gray-600 duration-100 ease-in-out">
              {t("message_client")}
            </button>
            <button
              //   onClick={() => props.staffDetails(staffUser?.staff_id)}
              onClick={() => staffDetails(client?.client_id)}
              className="rounded border-2 border-dark-gray whitespace-nowrap bg-dark-gray text-white py-2 px-3 hover:text-gray-300 transition duration-100 ease-in-out"
            >
              {t("view_client")}
            </button>
            {/* <Link
                  to="/staff-portal/client-details"
                  className="rounded border-2 border-dark-gray whitespace-nowrap bg-dark-gray text-white py-2 px-3 hover:text-gray-300 transition duration-100 ease-in-out"
                >
                  View client
                </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
