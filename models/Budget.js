const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        enum: ["Food", "Rent", "Utilities", "Entertainment", "Others"],
        index: true // Indexing for faster queries
    },
    amount: { type: Number, required: true, min: 0 },
    month: { type: String, required: true, index: true } // Indexing for month-based queries
}, { timestamps: true });

// Compound index for category and month to optimize queries
budgetSchema.index({ category: 1, month: 1 }, { unique: true });

module.exports = mongoose.model("Budget", budgetSchema);