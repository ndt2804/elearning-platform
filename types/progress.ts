import mongoose, { Schema, models } from "mongoose";

const userProgressSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    lessonId: {
      type: Schema.Types.ObjectId,
      ref: "Lession",
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const UserProgress =
  models.UserProgress || mongoose.model("UserProgress", userProgressSchema);

export default UserProgress;
