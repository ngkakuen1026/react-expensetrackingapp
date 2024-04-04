import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

// Library
import { PlusCircleIcon } from "@heroicons/react/24/solid";

const AddExpenseForm = ({budgets}) => {

    const fetcher = useFetcher();

    const formRef = useRef();
    const focusRef = useRef();

    const isSubmitting = fetcher.state === "submitting";

    useEffect(() => {
        if(!isSubmitting) {
            formRef.current.reset();
            focusRef.current.focus();
        }
    }, [isSubmitting])

    return (
        <div className='expense-form'>
            <h2 className="text-4xl font-bold mb-4">Create New {" "}
                <span>
                    {budgets.length === 1 && `${budgets.map((budget) => budget.name)}`}
                </span>
                {" "}Expense
            </h2>
            <fetcher.Form
                method="post" 
                className="budget-input-form border border-gray-300 rounded-md p-4"
                ref={formRef}   
            >
                <div className="expense-input mb-4">
                    <label htmlFor="newExpense" className="block font-semibold text-2xl mb-1">Expense Name</label>
                    <input
                        type="text"
                        name="newExpense"
                        id="newExpense"
                        placeholder="For example, Coffee"
                        required
                        className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black-600 w-full text-xl"
                        ref={focusRef}
                    />
                </div>
                <div className="expense-input mb-4">
                    <label htmlFor="newExpense" className="block font-semibold text-2xl mb-1">New Expense Amount</label>
                    <input
                        type="number"
                        step="0.01"
                        name="newBudgetAmount"
                        id="newBudgetAmount"
                        placeholder="Amount of your expense???"
                        required
                        inputMode="decimal"
                        className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black-600 w-full text-xl"
                    />
                </div>

                {/* If there are only one budget, this part will stay hidden */}
                <div className="budget-category mb-4" hidden={budgets.length === 1}>
                    <label htmlFor="newExpenseBudget" className="block font-semibold text-2xl mb-1">Budget Catergory</label>
                    <select
                        name="newExpenseBudget"
                        id="newExpenseBudget" 
                        className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black-600 w-full text-xl"
                        required
                    >
                        {
                            // Always sort the first created budget to be the first options
                            budgets.sort((a, b) => a.createdAt - b.createdAt)
                            .map((budget) => {
                                return (
                                    <option value={budget.id} key={budget.id}>
                                        {budget.name}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>

                <input type="hidden" name="_action" value="newExpense" />

                <button
                    type="submit"
                    className="bg-black hover:bg-gray-300 text-white font-bold py-2 px-4 rounded flex items-center text-2xl"
                    disabled={isSubmitting}
                >
                    {
                        (isSubmitting) ? 
                            <>
                                <PlusCircleIcon className="w-5 h-5" />
                                <span className="mr-2">Adding Expense... Please wait</span>
                            </>:
                        (
                            <>
                                <PlusCircleIcon className="w-5 h-5" />
                                <span className="mr-2">Add Expense</span>
                            </>
                        )
                    }
                </button>
            </fetcher.Form>
        </div>
    )
}

export default AddExpenseForm;
