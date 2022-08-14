import { faArrowDown, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// for language
import { useTranslation } from "react-i18next";
import StaffPortalLayout from "../../../Layout/StaffPortalLayout";

const ActivityForClientName = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const { id } = useParams();
  const [activityLogs, setActivityLogs] = useState([]);

  const getLogs = (clientID) => {
    axios.get(`/logs/retrieve/${clientID}`).then((response) => {
      setActivityLogs(response.data.results);
    });
  };

  useEffect(() => {
    getLogs(id);
  }, []);

  return (
    <StaffPortalLayout>
      <div className="mt-6">
        <span
          onClick={() => navigate(-1)}
          className="rounded border-2 whitespace-nowrap border-dark-gray bg-dark-gray text-white py-2 px-3 hover:text-gray-300 transition duration-100 ease-in-out cursor-pointer"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>
        {/* <h3 className="text-3xl text-center py-6">Activity For Client Name</h3> */}
        <h3 className="text-3xl text-center py-6">
          {t("activity_for")} {activityLogs[0]?.client_details?.client_name}
        </h3>
      </div>
      <table className="w-full users-table mx-auto">
        <thead>
          <tr>
            <td>{t("user_name_cap")}</td>

            <td>
              <span className="mr-2">
                <FontAwesomeIcon icon={faArrowDown} />
              </span>
              {t("date_time_cap")}
            </td>
            <td>{t("activity_contents")}</td>
            <td>{t("activity_type")}</td>
          </tr>
        </thead>
        <tbody>
          {activityLogs.map((item) => {
            return (
              <tr>
                <td>{item?.user_details.user_name}</td>
                <td>{new Date(item?.created_at).toDateString()}</td>
                <td>
                  <p>{t(`${item?.event_code}`)}</p>
                </td>

                <td>
                  <p className="bg-sky-400 py-2 w-32 text-white  rounded-full">
                    {item?.event_code}
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </StaffPortalLayout>
  );
};

export default ActivityForClientName;
