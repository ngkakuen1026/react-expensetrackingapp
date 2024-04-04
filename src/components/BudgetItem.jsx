// Helper functions
import { calculateSpent, formatCurrency, formatPercentages } from "../helerps";

const BudgetItem = ({ budget }) => {
  const { id, name, amount } = budget;
  const spent = calculateSpent(id);

  // Define the gradient colors for the progress bar
  const gradientColorStart = "from-yellow-400";
  const gradientColorEnd = "to-red-500";

  // Calculate the width of the progress bar fill
  const progressWidth = `${(spent / amount) * 100}%`;

  return (
    <div className="budget-card bg-white rounded-lg shadow-md p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-gray-500 text-xl">{formatCurrency(amount)} Budgeted</p>
      </div>
      <progress
        className={`w-full bg-gradient-to-r ${gradientColorStart} ${gradientColorEnd} h-4 rounded-full mt-2`}
        max={amount}
        value={spent}
      >
        {formatPercentages(spent / amount)}
      </progress>
      <div className="progress-text flex justify-between mt-2">
        <span className="text-gray-600 text-sm">{formatCurrency(spent)}<br/> Spent</span>
        <span className="text-gray-600 text-sm">{formatCurrency(amount - spent)}<br/> Remaining</span>
      </div>
    </div>
  );
};

export default BudgetItem;