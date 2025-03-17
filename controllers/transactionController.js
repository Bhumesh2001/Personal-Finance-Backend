const Transaction = require('../models/Transaction');

exports.createTransaction = async (req, res, next) => {
    try {
        const { amount, date, description, category } = req.body;
        if (!amount || !date || !description || !category) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        const transaction = await Transaction.create({ amount, date, description, category });
        res.status(201).json({ success: true, data: transaction });
    } catch (error) {
        next(error);
    }
};

exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find().sort({ date: -1 });
        res.status(200).json({ success: true, data: transactions });
    } catch (error) {
        next(error);
    }
};

exports.updateTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!transaction) return res.status(404).json({ success: false, message: "Transaction not found" });
        res.status(200).json({ success: true, data: transaction });
    } catch (error) {
        next(error);
    }
};

exports.deleteTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);
        if (!transaction) return res.status(404).json({ success: false, message: "Transaction not found" });
        res.status(200).json({ success: true, message: "Transaction deleted successfully" });
    } catch (error) {
        next(error);
    }
};