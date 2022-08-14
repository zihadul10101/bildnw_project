import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import overview from "../../Assets/images/overview.svg";
import overviewLone from "../../Assets/images/overviewmain.svg";
import companyinfo from "../../Assets/images/companyInfo.svg";
import applyForCredit from "../../Assets/images/applyforcrid.svg";
import purchase from "../../Assets/images/purchase.svg";
import cridLine from "../../Assets/images/creditLine.svg";
import allLone from "../../Assets/images/lone.svg";
import payments from "../../Assets/images/payment.svg";
import statement from "../../Assets/images/statement.svg";
import user from "../../Assets/images/user.svg";
  const OverviewMenus = [
  ];
  const ActionCenter = [
    {
      title: "Overview",
      active: false,
      to: "/action-center/overview",
      icon: faPenToSquare,
    },
    {
      title: "Company info",
      active: false,
      to: "/action-center/company-info",
      icon: faPenToSquare,
    },
    {
      title: "Apply for credit",
      active: false,
      to: "/action-center/apply-credit",
      icon: faPenToSquare,
    },
    {
      title: "Purchase",
      active: false,
      to: "/action-center/purchase",
      icon: faPenToSquare,
    },
  ];
  const Loans = [
    {
      title: "Overview",
      active: false,
      to: "/loans/overview",
      icon: faPenToSquare,
    },
    {
      title: "Credit line",
      active: false,
      to: "/loans/credit-line",
      icon: faPenToSquare,
    },
    {
      title: "All loans",
      active: false,
      to: "/loans/all-loans",
      icon: faPenToSquare,
    },
  ];
  const Billing = [
    {
      title: "Statement",
      active: false,
      to: "/billing/statement",
      icon: faPenToSquare,
    },
    {
      title: "Payments",
      active: false,
      to: "/billing/payments",
      icon: faPenToSquare,
    },
  ];
  const Account = [
    {
      title: "Profile",
      active: false,
      to: "/profile",
      icon: faPenToSquare,
    },
    {
      title: "Company details",
      active: false,
      to: "/company-details",
      icon: faPenToSquare,
    },
  ]
export default { OverviewMenus, ActionCenter, Loans, Billing, Account };
