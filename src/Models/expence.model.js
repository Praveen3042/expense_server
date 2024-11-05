const mongoose=require('mongoose')

const ExpenseTracker = mongoose.Schema(
  {
    date: String,
    amount: String,
    category: String,
    description: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    amountType: {
      type: String,
      enum: ['income', 'expense'],
      required: true,
  },
  },
  {
    timestamps: true,
  }
);
module.exports=mongoose.model("expense",ExpenseTracker)