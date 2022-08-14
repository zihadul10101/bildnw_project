import React, { useEffect, useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import StaffPortalLayout from "../../../Layout/StaffPortalLayout";
import { staffDashboardActionF } from "../../../Services/Actions/StaffAction/StaffDashboardAction";
import useAxios from "../../../Services/Api/Hooks/AxiosHook";
import SingleUser from "../../../Components/Staff/SingleUser";

const StaffDashboard = () => {
  const axiosInstance = useAxios();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { user_detail } = useSelector((state) => state.LogInfo);
  const { staffClients } = useSelector((state) => state.StaffDashboard);

  const [selected, setSelected] = useState("");
  {
    /* Seacrch start */
  }
  const [search, setSearch] = useState("");
  const [filteredClientname, setfilteredClientname] = useState([]);

  useEffect(() => {
    setfilteredClientname(
      staffClients.filter(
        (name) =>
          name.client.toLowerCase().includes(search.toLowerCase()) ||
          name.cr_number.toLowerCase().includes(search.toLocaleLowerCase())
      )
    );
  }, [search, staffClients]);
  {
    /* Seacrch end */
  }
  useEffect(() => {
    dispatch(staffDashboardActionF(axiosInstance));
  }, []);

  return (
    <StaffPortalLayout>
      <div className="w-11/12">
        <div className="py-2">
          <h3 className="text-4xl">
            {user_detail?.name}'s {t("dashboard")}
          </h3>
        </div>
        <div className="w-full grid grid-cols-10 gap-4 items-center">
          {/* Seacrch Bar */}
          <div className="col-span-4 relative">
            <form>
              <div className="form-group">
                <input
                  type="search"
                  className="form-input px-4 py-3 border-2 mt-8 rounded  w-full focus:focus:outline-none focus:ring focus:ring-dark-gray"
                  placeholder={t("search_client_name_place")}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  className="input-group-text absolute bottom-3 right-2"
                  id="basic-addon2"
                >
                  <FontAwesomeIcon
                    className="text-2xl"
                    icon={faMagnifyingGlass}
                  />
                </button>
              </div>
            </form>
          </div>

          {/* filter */}
          <div className="col-span-3">
            <div className="form-group">
              <label className="form-label inline-block mb-2 text-gray-700">
                {t("filter")}
              </label>

              <select
                value={selected}
                onChange={(e) => setSelected(e.currentTarget.value)}
                className="form-select px-4 py-3 border-2  rounded  w-full focus:focus:outline-none focus:ring focus:ring-dark-gray"
              >
                <option disabled selected>
                  {t("none")}
                </option>
                <option value="Aminul">Assigned to me</option>
                <option value="Aminul">Next Stap</option>
                <option value="Aminul">Next action: Staff</option>
              </select>
            </div>
          </div>

          {/* Sort by */}
          <div className="col-span-3">
            <div className="form-group">
              <label className="form-label inline-block mb-2 text-gray-700">
                {t("sort_by")}
              </label>
              <select className="form-select px-4 py-3 border-2  rounded  w-full focus:focus:outline-none focus:ring focus:ring-dark-gray">
                <option value="" selected>
                  {t("latest_change")}
                </option>
                <option value="">{t("latest_change")}</option>
                <option value="">Progress (ascending)</option>
                <option value="">Progress (descending)</option>
              </select>
            </div>
          </div>
        </div>

        {/* List body */}
        {filteredClientname?.map((user, index) => (
          <SingleUser user={user} key={index} />
        ))}
      </div>
    </StaffPortalLayout>
  );
};

export default StaffDashboard;
