import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import ThunkMiddleware from "redux-thunk";
import { signUpReducer } from "../Reducers/Auth/SignUpReducer";
import { logInReducer } from "../Reducers/Auth/LogInReducer";
import { userAccountReducer } from "../Reducers/AccountReducer/AccountReducer";
import { staffDashboardReducer } from "../Reducers/StaffReducer/StaffDashboardReducer";
import { ApplyCreditReducer } from "../Reducers/ActionCenterReducer/ApplyCreditReducer";
import { ActionOverviewReducer } from "../Reducers/ActionCenterReducer/ActionOverviewReducer";
import { StatementReducer } from "../Reducers/BillingReducer/StatementReducer";
import { LoansReducer } from "../Reducers/LoansReducer/LoansReducer";
import { tostReducer } from "../Reducers/Auth/ToastReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { SharedReducer } from "../Reducers/Shared/NavbarReducer";
import { OverviewReducer } from "../Reducers/OverviewReducer/OverviewReducer";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  tostReducer,
  SignUpInfo: signUpReducer,
  LogInfo: logInReducer,
  UserAccount: userAccountReducer,
  StaffDashboard: staffDashboardReducer,
  ApplyCredit: ApplyCreditReducer,
  LoansInfo: LoansReducer,
  ActionOverview: ActionOverviewReducer,
  BillingInfo: StatementReducer,
  SharedInfo: SharedReducer,
  OverviewInfo: OverviewReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [ThunkMiddleware];

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const persistor = persistStore(store);
