const express = require("express");
const router = express.Router();
const { setBudget, getBudgetSummary } = require("../controllers/budgetController");

router.post("/", setBudget);
router.get("/summary", getBudgetSummary);

module.exports = router;