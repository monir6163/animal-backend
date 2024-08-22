import { Category } from "../models/category.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Create a new category
const createCategory = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ status: "fail", message: "Name is required" });
    }
    //chekc if category exists
    const categoryExists = await Category.findOne({ name });
    if (categoryExists) {
      return res
        .status(400)
        .json({ status: "fail", message: "Category already exists" });
    }

    const category = new Category({ name });
    await category.save();
    res.status(201).json({ status: "success", message: "Category created" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

// get categories
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();
  res.status(200).json({ status: "success", data: categories });
});

export { createCategory, getCategories };
