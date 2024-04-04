import { useEffect, useRef } from "react";
import { Form, useFetcher } from "react-router-dom";

// Library
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

const AddBudgetForm = () => {

    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === "submitting";

    const formRef = useRef();
    const focusRef = useRef();

    useEffect(() => {
        if(!isSubmitting) {
            formRef.current.reset();
            focusRef.current.focus();
        }
    }, [isSubmitting])

    return (
        <div className="budget-form">
            <fetcher.Form 
                method="post" 
                className="budget-input-form border border-gray-300 rounded-md p-4"
                ref={formRef}
            >
                <h2 className="text-4xl font-bold mb-4">Create Budget</h2>
                <div className="budget-input mb-4">
                <label htmlFor="newBudget" className="block font-semibold text-2xl mb-1">Budget Name</label>
                <input
                    type="text"
                    name="newBudget"
                    id="newBudget"
                    placeholder="For example, Food"
                    required
                    className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black-600 w-full text-xl"
                    ref={focusRef}
                />
                </div>
                <div className="budget-amount-input mb-4">
                <label htmlFor="newBudgetAmount" className="block font-semibold text-2xl mb-1">Amount</label>
                <input
                    type="number"
                    step="0.01"
                    name="newBudgetAmount"
                    id="newBudgetAmount"
                    placeholder="Amount of your budget???"
                    required
                    inputMode="decimal"
                    className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black-600 w-full text-xl"
                />
                </div>

                <input type="hidden" name="_action" value="newBudget" />

                <button
                    type="submit"
                    className="bg-black hover:bg-gray-300 text-white font-bold py-2 px-4 rounded flex items-center text-2xl"
                    disabled={isSubmitting}
                >
                    {
                        (isSubmitting) ? 
                            <>
                                <CurrencyDollarIcon className="w-5 h-5" />
                                <span className="mr-2">Creating Budget... Please wait</span>
                            </>:
                        (
                            <>
                                <CurrencyDollarIcon className="w-5 h-5" />
                                <span className="mr-2">Create Budget</span>                                
                            </>
                        )
                    }
                </button>
            </fetcher.Form>
        </div>
    );
};

export default AddBudgetForm;