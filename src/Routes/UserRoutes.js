import React from "react";
import { Route, Routes } from "react-router-dom";
import CompanyDetails from "../Pages/User/Account/CompanyDetails/CompanyDetails";
import Profile from "../Pages/User/Account/Profile/Profile";
import ActionPurchase from "../Pages/User/ActionCenter/ActionPurchase/ActionPurchase";
import ApproveCreditLine from "../Pages/User/ActionCenter/ApplyCredit/ApprovedCredit/ApproveCreditLine/ApproveCreditLine";
import ApplyReviewOffer from "../Pages/User/ActionCenter/ApplyCredit/ApprovedCredit/ApplyReviewOffer/ApplyReviewOffer";
import PromissoryNote from "../Pages/User/ActionCenter/ApplyCredit/ApprovedCredit/PromissoryNote/PromissoryNote";
import AgreementCreditLine from "../Pages/User/ActionCenter/ApplyCredit/ApprovedCredit/AgreementCreditLine/AgreementCreditLine";
import OrderPurchase from "../Pages/User/ActionCenter/OrderPurchase/OrderPurchase";
import ActionCreditRequest from "../Pages/User/ActionCenter/ApplyCredit/ActionCreditRequest/ActionCreditRequest";
import AppliedSuccessful from "../Pages/User/ActionCenter/ApplyCredit/AppliedSuccessful/AppliedSuccessful";
import ProjectDetails from "../Pages/User/ActionCenter/ApplyCredit/ProjectDetails/ProjectDetails";
import UploadDocumentation from "../Pages/User/ActionCenter/ApplyCredit/UploadDocumentation/UploadDocumentation";
import ActionOverview from "../Pages/User/ActionCenter/ActionOverview/ActionOverview";
import UpdateActionCompanyInfo from "../Pages/User/ActionCenter/UpdateActionCompanyInfo/UpdateActionCompanyInfo";
import ActionCompanyInfo from "../Pages/User/ActionCenter/ActionCompanyInfo/ActionCompanyInfo";
import BillingStatement from "../Pages/User/Billings/BillingStatement/BillingStatement";
import BillingPayments from "../Pages/User/Billings/BillingPayments/BillingPayments";
import AllLoans from "../Pages/User/Loans/AllLoans/AllLoans";
import LoansCreditLine from "../Pages/User/Loans/LoansCreditLine/LoansCreditLine";
import LoansOverview from "../Pages/User/Loans/LoansOverview/LoansOverview";
import OverviewMain from "../Pages/User/Overview/OverviewMain";
import ApprovePurchase from "../Pages/User/ActionCenter/ApprovePurchase/ApprovePurchase";

const UserRoutes = () => {
  return (
    <Routes>
      <Route
          path="company-details"
          element={<CompanyDetails />}
        />
      <Route
          path="profile"
          element={<Profile />}
        />
      <Route
          path="/action-center/purchase"
          element={<ActionPurchase/>}
        />
      <Route
          path="/action-center/purchase"
          element={<ActionPurchase/>}
        />
      <Route
          path="/action-center/order-purchase"
          element={<OrderPurchase />}
        />
      <Route
          path="/action-center/promissory-note"
          element={<PromissoryNote />}
        />
      <Route
          path="/action-center/successfully-creditline"
          element={<ApproveCreditLine />}
        />
      <Route
          path="/action-center/agreement-creditline"
          element={<AgreementCreditLine />}
        />
      <Route
          path="/action-center/review-offer"
          element={<ApplyReviewOffer />}
        />
      <Route
          path="/action-center/apply-credit"
          element={<ActionCreditRequest/>}
        />
      <Route
          path="/action-center/applied-successfully"
          element={<AppliedSuccessful/>}
        />
      <Route
          path="/action-center/project-details"
          element={<ProjectDetails/>}
        />
      <Route
          path="/action-center/project-documentation"
          element={<UploadDocumentation/>}
        />
      <Route
          path="/action-center/company-info"
          element={<ActionCompanyInfo/>}
        />
      <Route
          path="/action-center/overview"
          element={<ActionOverview/>}
        />
      <Route
          path="/action-center/company-info/update/:client_id"
          element={<UpdateActionCompanyInfo/>}
        />
      <Route
          path="/billing/statement"
          element={<BillingStatement/>}
        />
        <Route
          path="/billing/payments"
          element={<BillingPayments/>}
        />
        <Route
          path="/loans/all-loans"
          element={<AllLoans/>}
        />
        <Route
          path="/loans/credit-line"
          element={<LoansCreditLine/>}
        />
        <Route
          path="/loans/overview"
          element={<LoansOverview/>}
        />
        <Route
          path="/overview"
          element={<OverviewMain/>}
        />
        <Route
          path="/action-center/approved-purchase"
          element={<ApprovePurchase/>}
        />
      
    </Routes>
  );
};

export default UserRoutes;
