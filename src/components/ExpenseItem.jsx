import React from 'react'

// Helper functions
import { formatCurrency, formatDate, getAllMatchingItems } from '../helerps'
import { Link, useFetcher } from 'react-router-dom';

// Library
import { TrashIcon } from "@heroicons/react/24/solid";

const ExpenseItem = ({expense, showBudget}) => {
  const budget = getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: expense.budgetId,
  })[0];

  const fetcher = useFetcher();

  return (
    <>
        <td className="px-4 py-2 text-center text-lg">{expense.name}</td>
        <td className="px-4 py-2 text-center text-lg">{formatCurrency(expense.amount)}</td>
        <td className="px-4 py-2 text-center text-lg">{formatDate(expense.createdAt)}</td>
        {
          showBudget && (
            <td className="px-4 py-2 text-center text-lg ">
            <Link to={`/budget/${budget.id}`} className="text-white font-semibold">
              <span className="bg-cyan-400 hover:bg-cyan-800 p-2 rounded">{budget.name}</span>
            </Link>
          </td>
          )
        }
        <td className="px-4 py-2 text-lg flex items-center justify-center">
          <fetcher.Form method="post">
            <input type="hidden" name="_action" value="deleteExpense" />
            <input type="hidden" name="expenseId" value={expense.id} />
            <button 
              type="submit"
              aria-label={`Delete ${expense.name} expense`}
              className="bg-red-200 hover:bg-red-400 border-4 border-gray-200 hover:border-gray-400 font-bold py-2 px-4 rounded"
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </fetcher.Form>
        </td>
    </>
  )
}

export default ExpenseItem

// 19A9B2