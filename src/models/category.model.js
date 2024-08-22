import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "CatName is required"],
      trim: true,
      unique: true,
    },
  },
  { timestamps: true, versionKey: false }
);
export const Category = mongoose.model("Category", categorySchema);
