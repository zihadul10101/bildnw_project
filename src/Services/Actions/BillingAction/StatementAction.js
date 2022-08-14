import axios from "axios";
import { GET_STATEMENTS, GET_SUMMARY } from "../../Types/BillingActionTypes";

export const GetStatements = (clientID) => async (dispatch) => {
  try {
    await axios.get(`/purchase/${clientID}/all/transaction`).then((res) => {
      dispatch({
        type: GET_STATEMENTS,
        payload: res.data.results,
      });
    });
  } catch (error) {}
};

export const GetSummary = (clientID) => async (dispatch) => {
  try {
    await axios.get(`/purchase/${clientID}/transaction/summary`).then((res) => {
      dispatch({
        type: GET_SUMMARY,
        payload: {
          summary: res.data,
        },
      });
    });
  } catch (error) {}
};
