import { Router } from "express";
import { createAnimal, getAnimals } from "../controllers/animal.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/add-animal").post(upload.single("animal_avatar"), createAnimal);
router.route("/get-animals").get(getAnimals);

export default router;
