import { redirect } from "react-router-dom";

import {toast} from "react-toastify";

//Helper functions
import { deleteItem, getAllMatchingItems } from "../helerps";

export function deleteBudget({params}) {
    try {
        deleteItem({
            key: "budgets",
            id: params.id,
        });

        const expensesAssociated = getAllMatchingItems({
            category: "expenses",
            key: "budgetId",
            value: params.id
        })

        expensesAssociated.forEach((expense) => {
            deleteItem({
                key: "expenses",
                id: expense.id
            })
        })

        toast.success("Budget deleted!")
    } catch (e) {
        throw new Error("There was a problem deleting your budget.");
    }

    return redirect("/");
}