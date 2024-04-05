import {createBrowserRouter, RouterProvider} from "react-router-dom";

// Library
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Layouts
import Main, { mainLoader } from "./layouts/Main"

// Custom Routes
import Dashboard, {dashboardAction, dashboardLoader} from "./components/Dashboard";
import Error from "./components/Error";
import DetailExpenses, { detailExpensesLoader } from "./components/DetailExpenses";

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
        path: "detailexpenses",
        element: <DetailExpenses />,
        loader: detailExpensesLoader,
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