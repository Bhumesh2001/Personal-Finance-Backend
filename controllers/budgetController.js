const Budget = require('../models/Budget');
const Transaction = require('../models/Transaction');

exports.setBudget = async (req, res, next) => {
    try {
        const { category, amount, month } = req.body;
        if (!category || !amount || !month) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        const budget = await Budget.create({ category, amount, month });
        res.status(201).json({ success: true, data: budget });
    } catch (error) {
        next(error);
    }
};

exports.getBudgetSummary = async (req, res, next) => {
    try {
        const budgets = await Budget.find();
        const transactions = await Transaction.find();
        const spendingByCategory = transactions.reduce((acc, txn) => {
            acc[txn.category] = (acc[txn.category] || 0) + txn.amount;
            return acc;
        }, {});
        const summary = budgets.map(budget => ({
            category: budget.category,
            budgeted: budget.amount,
            spent: spendingByCategory[budget.category] || 0,
            difference: budget.amount - (spendingByCategory[budget.category] || 0)
        }));
        res.status(200).json({ success: true, data: summary });
    } catch (error) {
        next(error);
    }
};