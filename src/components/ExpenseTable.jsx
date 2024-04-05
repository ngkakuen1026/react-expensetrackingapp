import React from 'react'

// Components
import ExpenseItem from './ExpenseItem'

const ExpenseTable = ({expenses}) => {
  return (
    <div className="full-w my-4">
      <table className="w-full bg-white border border-gray-200">
        <thead>
            <tr className='bg-blue-400 text-white'>
                {
                    ["Name", "Amount", "Date"].map((i, index) => (
                        <th key={index} className="py-3 px-6 border-b font-semibold text-xl">
                          {i}
                        </th>
                    ))
                }
            </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={expense.id} className={index % 2 === 0 ? 'hover:bg-blue-100' : 'hover:bg-green-100'}>
              <ExpenseItem expense={expense} />
            </tr> 
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ExpenseTable
