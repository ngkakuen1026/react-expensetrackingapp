import { useLoaderData } from "react-router-dom";

// Library
import { toast } from "react-toastify";

// Helper functions
import { createExpense, deleteItem, getAllMatchingItems } from "../helerps"

// Components
import BudgetItem from "../components/BudgetItem";
import AddExpenseForm from "../components/AddExpenseForm";
import ExpenseTable from "../components/ExpenseTable";

//loader
export async function budgetLoader({params}) {

  const expenses = await getAllMatchingItems({
    category: "expenses",
    key: "budgetId",
    value: params.id,
  });

  const budget = await getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: params.id,
  })[0];

  if(!budget) {
    throw new Error("Budget doesn't exist.");
  }

  return {budget, expenses};
}

// Action
export async function budgetAction({request}) {

  const data = await request.formData();
  const {_action, ...values} = Object.fromEntries(data);

  if (_action === "newExpense") {
    try {
        createExpense({
            name: values.newExpense,
            amount: values.newExpenseAmount,
            budgetId: values.newExpenseBudget
        });
        return toast.success(`Expense ${values.newExpense} created!`);
    } catch (e) {
        throw new Error("There was a problem with creating your expense.");
    }
  }

  if (_action === "deleteExpense") {
      try {
          deleteItem({
              key: "expenses",
              id: values.expenseId
          });;
          return toast.success(`Expense removed!`)
      } catch (e) {
          throw new Error("There was a problem with removing your expense.");
      }
  }
}

const BudgetPage = () => {

  const { budget, expenses} = useLoaderData();

  return (
    <div className="budget-page">
      <h2 className="text-4xl font-bold my-2">
        <span className="text-Color19A9B2">{budget.name} </span>
        Overview
      </h2>
      <div>
        <BudgetItem budget={budget}/>
        <AddExpenseForm budgets={[budget]} />
      </div>
      {
        expenses && expenses.length > 0 && (
          <div className="budget-expenses">
            <h2 className="text-4xl font-bold my-2">
              <span className="text-Color19A9B2">{budget.name} </span>
              Expenses
            </h2>
            <ExpenseTable expenses={expenses} showBudget={false} />
          </div>
        )
      }
    </div>
  )
}

export default BudgetPage
