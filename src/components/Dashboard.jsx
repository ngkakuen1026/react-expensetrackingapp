import React from "react";

// Helper functions
import { createBudget, fetchData, wait } from "../helerps";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

// Components
import Register from "./Register";
import AddBudgetForm from "./AddBudgetForm";

// Loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
}

// Action
export async function dashboardAction({request}) {

    // 
    await wait();

    const data = await request.formData();
    const {_action, ...values} = Object.fromEntries(data);
    console.log(_action)

    // New user submission
    if (_action === "newUser") {
        try {
            localStorage.setItem("userName", JSON.stringify(values.userName))
            return toast.success(`Hi, ${values.userName}`);
        } catch (e) {
            throw new Error("There was a problem with creating your account.")
        }
    }

    // New budget submission
    if (_action === "newBudget") {
        try {
            createBudget({
                name: values.newBudget,
                amount: values.newBudgetAmount
            })
            return toast.success("Budget created!")
        } catch (e) {
            throw new Error("There was a problem with creating your budget.")
        }
    }
}

const Dashboard = () => {

    //Fetch the data from object userName created at function dashboardLoader 
    const {userName, budgets} = useLoaderData()

    return (
        <>
            {userName ? (
                <div className="dashboard p-9">
                    <h1 className="text-6xl font-bold mb-4">
                        Welcome back, <span className="text-blue-500">{userName}</span>
                    </h1>
                    <div className="grid grid-cols-2 gap-4">
                        {/* {budgets ? () : ()} */}
                        <div>
                            <AddBudgetForm />
                    </div>
                    </div>
                </div>
                ) : (
                <Register />
            )}
        </>
    );
};

export default Dashboard;