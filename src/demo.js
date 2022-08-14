import "./App.css";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Login from "./component/auth/Login";
import Signup from "./component/auth/signup/Signup";
import Verification from "./component/auth/signup/Verification";
import Registration from "./component/auth/signup/Registration";
import CompanyInfo from "./component/auth/signup/CompanyInfo";
import ActionOverview from "./component/pages/action-center/ActionOverview";
import ActionCompanyInfo from "./component/pages/action-center/ActionCompanyInfo";
import ActionCreditRequest from "./component/pages/action-center/apply-credit/ActionCreditRequest";
import ActionPurchase from "./component/pages/action-center/action-purchase/ActionPurchase";
import BillingStatement from "./component/pages/billings/BillingStatement";
import LoansOverview from "./component/pages/loans/LoansOverview";
import OverviewMain from "./component/pages/overview/OverviewMain";
import Profile from "./component/pages/account/Profile";
import CompanyDetails from "./component/pages/account/CompanyDetails";
import LoansCreditLine from "./component/pages/loans/LoansCreditLine";
import AllLoans from "./component/pages/loans/AllLoans";
import BillingPayments from "./component/pages/billings/BillingPayments";
import InvitedUserRegistration from "./component/auth/invited-user/InvitedUserRegistration";
import ProtectedRoute from "./component/auth/ProtectedRoute";
import ForgetPassword from "./component/auth/signup/ForgetPassword";
import { ToastContainer } from "react-toastify";
import StaffDashboard from "./component/pages/staff-portal/StaffDashboard";
import StaffDetails from "./component/pages/staff-portal/StaffDetails";
import UsersUnderClient from "./component/pages/staff-portal/UsersUnderClient";
import DocumentsForClientName from "./component/pages/staff-portal/DocumentsForClientName";
import ActivityForClientName from "./component/pages/staff-portal/ActivityForClientName";
import ProjectDetails from "./component/pages/action-center/apply-credit/ProjectDetails";
import UploadDocumentation from "./component/pages/action-center/apply-credit/UploadDocumentation";
import AppliedSuccessful from "./component/pages/action-center/apply-credit/AppliedSuccessful";
import ApplyReviewOffer from "./component/pages/action-center/apply-credit/approved-credit/ApplyReviewOffer";
import AgreementCreditLine from "./component/pages/action-center/apply-credit/approved-credit/AgreementCreditLine";
import PromissoryNote from "./component/pages/action-center/apply-credit/approved-credit/PromissoryNote";
import ApproveCreditLine from "./component/pages/action-center/apply-credit/approved-credit/ApproveCreditLine";
import ApproveCreditRequest from "./component/pages/staff-portal/ApproveCreditRequest";
import OrderPurchase from "./component/pages/action-center/action-purchase/OrderPurchase";
import ApprovePurchase from "./component/pages/action-center/action-purchase/ApprovePurchase";
import ViewCreditRequest from "./component/pages/staff-portal/ViewCreditRequest";
import PurchaseOrders from "./component/pages/staff-portal/PurchaseOrders";
import UpdateActionCompanyInfo from "./component/pages/action-center/UpdateActionCompanyInfo";
import EmailVerifyRequest from "./component/auth/email-verification/EmailVerifyRequest";
import VerifiedEmail from "./component/auth/email-verification/VerifiedEmail";

function App() {
  const [signupData, setSignupData] = useState({});
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/register"
          element={<Signup setSignupData={setSignupData} />}
        />
        <Route exact path="/verification/:from" element={<Verification />} />
        <Route
          exact
          path="/company-info"
          element={<CompanyInfo signupData={signupData} />}
        />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route
          path="/email-verification-request"
          element={<EmailVerifyRequest />}
        />
        <Route
          path="/email-verified/:timestamp/:user_id"
          element={<VerifiedEmail />}
        />

        {/* Overview Routes */}
        <Route
          path="/overview"
          element={<ProtectedRoute component={OverviewMain} />}
        />
        {/* Action Center Routes */}
        <Route
          path="/action-center/overview"
          element={<ProtectedRoute component={ActionOverview} />}
        />
        <Route
          path="/action-center/company-info"
          element={<ProtectedRoute component={ActionCompanyInfo} />}
        />
        <Route
          path="/action-center/company-info/update/:client_id"
          element={<ProtectedRoute component={UpdateActionCompanyInfo} />}
        />
        <Route
          path="/action-center/apply-credit"
          element={<ProtectedRoute component={ActionCreditRequest} />}
        />
        <Route
          path="/action-center/project-details"
          element={<ProtectedRoute component={ProjectDetails} />}
        />
        <Route
          path="/action-center/project-documentation"
          element={<ProtectedRoute component={UploadDocumentation} />}
        />
        <Route
          path="/action-center/applied-successfully"
          element={<ProtectedRoute component={AppliedSuccessful} />}
        />
        <Route
          path="/action-center/review-offer"
          element={<ProtectedRoute component={ApplyReviewOffer} />}
        />
        <Route
          path="/action-center/agreement-creditline"
          element={<ProtectedRoute component={AgreementCreditLine} />}
        />
        <Route
          path="/action-center/promissory-note"
          element={<ProtectedRoute component={PromissoryNote} />}
        />
        <Route
          path="/action-center/successfully-creditline"
          element={<ProtectedRoute component={ApproveCreditLine} />}
        />

        <Route
          path="/action-center/purchase"
          element={<ProtectedRoute component={ActionPurchase} />}
        />
        <Route
          path="/action-center/order-purchase"
          element={<ProtectedRoute component={OrderPurchase} />}
        />
        <Route
          path="/action-center/approved-purchase"
          element={<ProtectedRoute component={ApprovePurchase} />}
        />

        {/* Loans Routes */}
        <Route
          path="/loans/overview"
          element={<ProtectedRoute component={LoansOverview} />}
        />
        <Route
          path="/loans/credit-line"
          element={<ProtectedRoute component={LoansCreditLine} />}
        />
        <Route
          path="/loans/all-loans"
          element={<ProtectedRoute component={AllLoans} />}
        />

        {/* Billing Routes */}
        <Route
          path="/billing/statement"
          element={<ProtectedRoute component={BillingStatement} />}
        />
        <Route
          path="/billing/payments/:purchase_id"
          element={<ProtectedRoute component={BillingPayments} />}
        />

        {/* Account Routes */}
        <Route
          path="/profile"
          element={<ProtectedRoute component={Profile} />}
        />
        <Route
          path="/company-details"
          element={<ProtectedRoute component={CompanyDetails} />}
        />

        {/* Invited Users Routes */}
        <Route
          path="/invited-user-registration/:CurrentTime/:client_id"
          element={<ProtectedRoute component={InvitedUserRegistration} />}
        />

        {/* Staff Portal Routes */}
        <Route path="/staff-portal" element={<StaffDashboard />} />
        <Route
          path="/staff-portal/client-details/:id"
          element={<StaffDetails />}
        />
        <Route path="/user-under-client/:id" element={<UsersUnderClient />} />
        <Route
          path="/document-client/:id"
          element={<DocumentsForClientName />}
        />
        <Route
          path="/activity-client/:id"
          element={<ActivityForClientName />}
        />
        <Route
          path="/purchase-orders-client/:client_id"
          element={<PurchaseOrders />}
        />
        <Route
          path="/approve-credit-request/:id"
          element={<ApproveCreditRequest />}
        />
        <Route
          path="/view-credit-request/:id"
          element={<ViewCreditRequest />}
        />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
