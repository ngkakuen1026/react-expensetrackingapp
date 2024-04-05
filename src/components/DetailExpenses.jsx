import { useLoaderData } from "react-router-dom";

// Library
import { toast } from "react-toastify";

// Helper functions
import { deleteItem, fetchData } from '../helerps';

// Components
import ExpenseTable from "./ExpenseTable";

// Loader
export function detailExpensesLoader() {
    const expenses = fetchData("expenses");
    return { expenses };
}

// Action
export async function detailExpensesAction({request}) {

    const data = await request.formData();
    const {_action, ...values} = Object.fromEntries(data);

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

const DetailExpenses = () => {
    const {expenses} = useLoaderData();

    return (
        <div className="detail-expenses p-9">
            <h2 className="text-4xl font-bold mb-4">All Expenses Detail</h2>
            {
                expenses && expenses.length > 0? (
                    <div className="detail-recent-expenses">
                        <h2 className="text-3xl my-2">
                            Recent Expenses <span className="text-xl">({expenses.length} total expenses made)</span>
                        </h2>
                        <ExpenseTable expenses={expenses} />
                    </div>
                ) : (
                <h2 className="text-2xl mb-4">No Expenses to show</h2>
            )}
        </div>
    )
}

export default DetailExpenses;
