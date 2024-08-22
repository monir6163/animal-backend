import mongoose, { Schema } from "mongoose";

const animalSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    animal_avatar: {
      public_id: String,
      url: String,
    },
    catId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Category is required"],
    },
  },
  { timestamps: true, versionKey: false }
);

export const Animal = mongoose.model("Animal", animalSchema);
