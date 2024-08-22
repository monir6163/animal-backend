import { Animal } from "../models/animal.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { cloudinaryUpload } from "../utils/cloudinary.js";

// Create a new animal
const createAnimal = asyncHandler(async (req, res) => {
  try {
    const { name, catId } = req.body;
    if (!name || !catId) {
      return res
        .status(400)
        .json({ status: "fail", message: "Name and category ID are required" });
    }
    const animalLoacalPath = req.file?.path;
    if (!animalLoacalPath) {
      return res
        .status(400)
        .json({ status: "fail", message: "Animal avatar is required" });
    }
    const avatar = await cloudinaryUpload(animalLoacalPath, "ecom/user");
    if (!avatar) {
      return res
        .status(500)
        .json({ status: "error", message: "Error uploading avatar" });
    }
    const newAnimal = new Animal({
      name,
      catId,
      animal_avatar: {
        public_id: avatar.public_id,
        url: avatar.url,
      },
    });
    await newAnimal.save();
    return res.status(201).json({
      status: "success",
      data: newAnimal,
      message: "Animal created successfully",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
});

// get catId wise
const getAnimals = asyncHandler(async (req, res) => {
  try {
    const animals = await Animal.find();
    return res.status(200).json({ status: "success", data: animals });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
});

export { createAnimal, getAnimals };
