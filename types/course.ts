import mongoose, { Schema, models } from "mongoose";
const courseSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      unique: true,
      required: false,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const Course = models.Course || mongoose.model("Course", courseSchema);
export default Course;
