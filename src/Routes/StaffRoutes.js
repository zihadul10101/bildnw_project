import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ActivityForClientName from "../Pages/StaffPortal/ActivityForClientName/ActivityForClientName";
import ApproveCreditRequest from "../Pages/StaffPortal/ApproveCreditRequest/ApproveCreditRequest";
import StaffDashboard from "../Pages/StaffPortal/Dashboard/StaffDashboard";
import DocumentsForClientName from "../Pages/StaffPortal/DocumentsForClientName/DocumentsForClientName";
import PurchaseOrdersClient from "../Pages/StaffPortal/PurchaseOrderClient/PurchaseOrdersClient";
import StaffDetails from "../Pages/StaffPortal/StaffDetails/StaffDetails";
import UsersUnderClient from "../Pages/StaffPortal/UserUnderClient/UsersUnderClient";
import ViewCreditRequest from "../Pages/StaffPortal/ViewCreditRequest/ViewCreditRequest";

const StaffRoutes = () => {
  const [signupData, setSignupData] = useState({});

  return (
    <Routes>
      <Route path="staff-portal">
        <Route index={true} element={<StaffDashboard />} />
        <Route path="client-details/:id" element={<StaffDetails />} />
        <Route path="view-credit-request/:id" element={<ViewCreditRequest />} />
        <Route path="user-under-client/:id" element={<UsersUnderClient />} />
        <Route path="activity-client/:id" element={<ActivityForClientName />} />
        <Route
          path="approve-credit-request/:id"
          element={<ApproveCreditRequest />}
        />
        <Route
          path="purchase-orders-client/:id"
          element={<PurchaseOrdersClient />}
        />
        <Route
          path="document-client/:id"
          element={<DocumentsForClientName />}
        />
      </Route>
    </Routes>
  );
};

export default StaffRoutes;
