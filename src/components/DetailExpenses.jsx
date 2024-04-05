import { useLoaderData } from "react-router-dom";

// Helper functions
import { fetchData } from '../helerps';

// Components
import ExpenseTable from "./ExpenseTable";

// Loader
export function detailExpensesLoader() {
    const expenses = fetchData("expenses");
    return { expenses };
}

const DetailExpenses = () => {
    const {expenses} = useLoaderData();

    return (
        <div className="detail-expenses p-9">
            <h2 className="text-4xl font-bold mb-4">All Expenses Detail:</h2>
            {
                expenses && expenses.length > 0? (
                    <div className="detail-recent-expenses">
                        <h2 className="text-3xl my-2">
                            Recent Expenses <span className="text-xl">({expenses.length} total expenses made)</span>
                        </h2>
                        <ExpenseTable expenses={expenses} />
                    </div>
                ) : (
                <p></p>
            )}
        </div>
    )
}

export default DetailExpenses;
