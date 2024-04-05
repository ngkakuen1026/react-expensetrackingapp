import {createBrowserRouter, RouterProvider} from "react-router-dom";

// Library
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Layouts
import Main, { mainLoader } from "./layouts/Main"

// Custom Routes
import Dashboard, {dashboardAction, dashboardLoader} from "./routes/Dashboard";
import Error from "./routes/Error";
import DetailExpenses, { detailExpensesAction, detailExpensesLoader } from "./routes/DetailExpenses";
import BudgetPage, { budgetAction, budgetLoader } from "./routes/BudgetPage";

// Actions
import { logoutAction } from "./actions/logout";

const router = createBrowserRouter([
  { 
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [  
      {
        index: true,
        element: <Dashboard/>,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />
      },
      {
        path: "budget/:id",
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error />
      },
      {
        path: "detailexpenses",
        element: <DetailExpenses />,
        loader: detailExpensesLoader,
        action: detailExpensesAction,
        errorElement: <Error />
      },
      {
        path: "logout",
        action: logoutAction
      }
    ]
  },
]);

function App() {
  return (
    <div className="app">
    <RouterProvider router={router} />
    <ToastContainer />
    </div>
  );
}

export default App;