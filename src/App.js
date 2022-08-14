import { ToastContainer } from "react-toastify";
import AuthRoutes from "./Routes/AuthRoutes";
import StaffRoutes from "./Routes/StaffRoutes";
import UserRoutes from "./Routes/UserRoutes";

function App() {
  return (
    <>
      <AuthRoutes />
      <StaffRoutes />
      <UserRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
