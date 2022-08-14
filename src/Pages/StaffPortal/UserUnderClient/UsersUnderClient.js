import React from "react";
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import StaffPortalLayout from "../../../Layout/StaffPortalLayout";
import { usersColleagues } from "../../../Services/Actions/StaffAction/StaffDashboardAction";
import "../.././../Assets/Styles/scss/staffStyles.scss";

const UsersUnderClient = () => {
  // for language
  const { t } = useTranslation();

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userUnderClients } = useSelector((state) => state.StaffDashboard);
  useEffect(() => {
    dispatch(usersColleagues(id));
  }, []);
  return (
    <StaffPortalLayout>
      <div className="mt-6">
        <span
          onClick={() => navigate(-1)}
          className="rounded border-2 whitespace-nowrap border-dark-gray bg-dark-gray text-white py-2 px-3 hover:text-gray-300 transition duration-100 ease-in-out cursor-pointer"
        >
          {localStorage.getItem("lng") === "ar" ? (
            <FontAwesomeIcon icon={faArrowRight} />
          ) : (
            <FontAwesomeIcon icon={faArrowLeft} />
          )}
        </span>
        <h3 className="text-3xl text-center py-6">{t("user_under")}</h3>
      </div>
      <table className="w-full users-table mx-auto">
        <thead>
          <tr>
            <td>{t("user_name_cap")}</td>
            <td>{t("email_phone_cap")}</td>
            <td>
              <span className="mr-2">
                <FontAwesomeIcon icon={faArrowDown} />
              </span>
              {t("last_login_cap")}
            </td>
            <td>{t("position_cap")}</td>
            <td>{t("admin_cap")}</td>
          </tr>
        </thead>
        <tbody>
          {userUnderClients.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>
                <p>{user.email}</p>
                <p>{user.phone}</p>
              </td>
              <td>{new Date(user.last_login).toLocaleString()}</td>
              <td>
                <p className="bg-sky-400 py-2 w-16 text-white text-center rounded-full">
                  {user.get_position}
                </p>
              </td>
              <td>
                {user?.is_system_user === true ? (
                  <p className="bg-sky-400 py-2 w-16 text-white text-center rounded-full">
                    {t("yes")}
                  </p>
                ) : (
                  <p className="bg-yellow-400 py-2 w-16 text-white text-center rounded-full">
                    {t("no")}
                  </p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </StaffPortalLayout>
  );
};

export default UsersUnderClient;
