import React from "react";

// Helper functions
import { createBudget, createExpense, fetchData, wait } from "../helerps";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

// Components
import Register from "./Register";
import AddBudgetForm from "./AddBudgetForm";
import AddExpenseForm from "./AddExpenseForm";

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

    // New budget submission
    if (_action === "newExpense") {
        try {
            createExpense({
                name: values.newExpense,
                amount: values.newExpenseAmount,
                budgetId: values.newExpenseBudget
            })
            return toast.success(`Expense ${values.newExpense} created!`)
        } catch (e) {
            throw new Error("There was a problem with creating your expense.")
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
                        {
                            budgets && budgets.length > 0 ? (
                                <div>
                                    <AddBudgetForm />
                                    <AddExpenseForm
                                        budgets={budgets} 
                                    />
                                </div>
                            ) : (
                                <div>
                                    <p className="text-2xl font-semibold mb-4">
                                        Create a budget and start managing your expenses!
                                    </p>
                                    <AddBudgetForm />
                                </div>
                            )
                        }
                    </div>
                </div>
                ) : (
                <Register />
            )}
        </>
    );
};

export default Dashboard;