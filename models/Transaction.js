const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    amount: { type: Number, required: true, min: 0 },
    date: { type: Date, required: true, index: true }, // Indexing for date-based queries
    description: { type: String, required: true, trim: true },
    category: {
        type: String,
        required: true,
        enum: ["Food", "Rent", "Utilities", "Entertainment", "Others"],
        index: true // Indexing for faster category-based lookups
    }
}, { timestamps: true });

// Compound index for optimized queries
transactionSchema.index({ category: 1, date: -1 });

module.exports = mongoose.model("Transaction", transactionSchema);