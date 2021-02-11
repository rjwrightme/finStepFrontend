import React, { createContext, useReducer, useContext } from "react";
import {
  UPDATE_WINDOW,
  SHOW_MODAL,
  HIDE_MODAL,
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  ADD_INCOME,
  DELETE_INCOME,
  ADD_SAVINGS,
  DELETE_SAVINGS,
  ADD_EXPENSES,
  DELETE_EXPENSES,
  ADD_DEBT,
  DELETE_DEBT,
  SYNC_BUDGET_ITEMS,
  UPDATE_WALLET,
  UPDATE_BUDGET_MAX,
  UPDATE_BUDGET_CURRENT,
  UPDATE_BUDGET_ID,
} from "./actions";

const FinStepContext = createContext();
const { Provider } = FinStepContext;

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_WINDOW:
      return {
        ...state,
        currentWindow: action.window,
      };

    case SHOW_MODAL:
      return {
        ...state,
        modal: true,
        modalType: action.modal,
      };

    case HIDE_MODAL:
      return {
        ...state,
        modal: false,
      };

    case UPDATE_BUDGET_CURRENT:
      return {
        ...state,
        budgetCurrent: (
          parseFloat(state.budgetCurrent) + parseFloat(action.payload)
        ).toFixed(2),
      };

    case UPDATE_BUDGET_MAX:
      return {
        ...state,
        budgetMax: (
          parseFloat(state.budgetMax) + parseFloat(action.payload)
        ).toFixed(2),
      };

    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.splice(action.index, 1),
      };

    case ADD_INCOME:
      return {
        ...state,
        income: [...state.income, action.payload],
      };

    case DELETE_INCOME:
      return {
        ...state,
        income: state.income.splice(action.index, 1),
      };

    case ADD_SAVINGS:
      return {
        ...state,
        savings: [...state.savings, action.payload],
      };

    case DELETE_SAVINGS:
      return {
        ...state,
        savings: state.savings.splice(action.index, 1),
      };

    case ADD_EXPENSES:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    case DELETE_EXPENSES:
      return {
        ...state,
        expenses: state.expenses.splice(action.index, 1),
      };

    case ADD_DEBT:
      return {
        ...state,
        debt: [...state.debt, action.payload],
      };

    case DELETE_DEBT:
      return {
        ...state,
        debt: state.debt.splice(action.index, 1),
      };

    case UPDATE_BUDGET_ID:
      return {
        ...state,
        budgetId: action.id,
      };

    case SYNC_BUDGET_ITEMS:
      const incomeArray = action.payload.filter(
        (budgetItem) => budgetItem.type === "income"
      );
      const savingsArray = action.payload.filter(
        (budgetItem) => budgetItem.type === "savings"
      );
      const expensesArray = action.payload.filter(
        (budgetItem) => budgetItem.type === "expense"
      );
      const debtArray = action.payload.filter(
        (budgetItem) => budgetItem.type === "debt"
      );
      return {
        ...state,
        income: incomeArray,
        savings: savingsArray,
        expenses: expensesArray,
        debt: debtArray,
      };
    default:
      return state;
  }
};

const FinStepProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    currentWindow: "wallet",
    budgetId: 0,
    budgetMax: 0,
    budgetCurrent: 0,
    income: [],
    savings: [],
    expenses: [],
    debt: [],
    wallet: 0,
    transactions: [],
    modal: false,
    modalType: "",
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useFinStepContext = () => {
  return useContext(FinStepContext);
};

export { FinStepProvider, useFinStepContext };
