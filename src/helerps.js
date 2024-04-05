// Local Storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

// Generate random color
const generateRandomColor = () => {
    const existingBudgetsLength = fetchData("budgets")?.length ?? 0;
    return `${existingBudgetsLength * 34} 65% 50%`
}

// Time delay simulation
export const wait = () => new Promise(
    res => setTimeout (res, Math.random() * 1600)
)

// Get all items from local storage
export const getAllMatchingItems = ({category, key, value}) => {
    const data = fetchData(category) ?? [];
    return data.filter((item) => item[key] === value);
}

// Create budget
export const createBudget = ({name, amount}) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        amount: +amount,
        color: generateRandomColor()
    }
    const existingBudgets = fetchData("budgets") ?? [];
    return localStorage.setItem("budgets", JSON.stringify([...existingBudgets, newItem]))
}

// Delete item from local storage
export const deleteItem = ({key, id}) => {
    const existingData = fetchData(key);
    if (id) {
        const newData = existingData.filter((item) => item.id !== id);
        return localStorage.setItem(key, JSON.stringify(newData));
    }
    return localStorage.removeItem(key);
}

// Create expense
export const createExpense = ({name, amount, budgetId}) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        amount: +amount,
        budgetId: budgetId
    }
    const existingExpenses = fetchData("expenses") ?? [];
    return localStorage.setItem("expenses", JSON.stringify([...existingExpenses, newItem]))
}

// Calculate the expenses based on the budget
export const calculateSpent = (budgetId) => {
    const expenses = fetchData("expenses") ?? [];
    const budgetSpent = expenses.reduce((acc, expense) => {
        // Check if the budgetId passed in equals to expenseId
        if(expense.budgetId !== budgetId) return acc;

        // Add the amount to total
        return acc += expense.amount
    }, 0)
    return budgetSpent;
}

// Formatting

// Format currency
export const formatCurrency = (amount) => {
    return amount.toLocaleString(undefined, {
        style: "currency",
        currency: "HKD"
    })
}

// Format precentages
export const formatPercentages = (amount) => {
    return amount.toLocaleString(undefined, {
        style: "percent",
        minFractionDigits: 0,
    })
}

// Format date
export const formatDate = (epoch) => new Date(epoch).toLocaleDateString();

