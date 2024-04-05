import React from 'react'

// Helper functions
import { formatCurrency, formatDate } from '../helerps'

const ExpenseItem = ({expense}) => {
  return (
    <>
        <td className="px-4 py-2 text-center text-lg">{expense.name}</td>
        <td className="px-4 py-2 text-center text-lg">{formatCurrency(expense.amount)}</td>
        <td className="px-4 py-2 text-center text-lg">{formatDate(expense.createdAt)}</td>
    </>
  )
}

export default ExpenseItem
