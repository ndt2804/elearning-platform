import mongoose, { Schema, models } from "mongoose";

const purchaseSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    amount: {
      type: Number,
    },
    courseId: {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  },
  { timestamps: true }
);

const Purchase = models.Purchase || mongoose.model("Purchase", purchaseSchema);

export default Purchase;
