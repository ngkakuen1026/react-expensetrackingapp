import { Form, Link } from "react-router-dom";

// Helper functions
import { calculateSpent, formatCurrency, formatPercentages } from "../helerps";

import { BanknotesIcon, TrashIcon } from "@heroicons/react/24/solid";

const BudgetItem = ({ budget, showDelete = false }) => {
  const { id, name, amount } = budget;
  const spent = calculateSpent(id);

  return (
    <div className="budget-card bg-white rounded-lg shadow-md p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-gray-500 text-sm">{formatCurrency(amount)} Budgeted</p>
      </div>
      <progress
        className={`w-full bg-gradient-to-r h-4 rounded-full my-2`}
        max={amount}
        value={spent}
      >
        {formatPercentages(spent / amount)}
      </progress>
      <div className="progress-text flex justify-between my-2">
        <span className="text-gray-600 text-sm">{formatCurrency(spent)}<br/> Spent</span>
        <span className="text-gray-600 text-sm">{formatCurrency(amount - spent)}<br/> Remaining</span>
      </div>
      {
        showDelete ? (
          <div className="text-center">
            <Form
              method="post"
              action="delete"
              onSubmit={(event) => {
                /* eslint-disable no-restricted-globals */
                if (!confirm
                  ("Delete this budget permanently?")
                ) {
                  event.preventDefault();
                }
              }}
            >
              <button 
                type="submit"
                className="bg-black hover:bg-gray-300 text-white font-bold py-2 px-4 rounded inline-flex items-center text-xl"
                >
                <TrashIcon className="w-5 h-5" />
                <span>Delete budget</span>
              </button>
            </Form>
          </div>
        ) : (
          <div className="text-center">
            <Link
              to={`/budget/${id}`}
              className="bg-black hover:bg-gray-300 text-white font-bold py-2 px-4 rounded inline-flex items-center text-xl"
            >
              <BanknotesIcon className="w-5 h-5" />
              <span>View Details</span>
            </Link>
          </div>
        )
      }
    </div>
  );
};

export default BudgetItem;