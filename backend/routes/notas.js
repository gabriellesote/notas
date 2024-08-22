import express from "express";
import { getNotas,addNotas,updateNotas,deleteNotas } from "../controllers/nota.js";

const router = express.Router();

router.get("/", getNotas);
router.post("/", addNotas);
router.put("/:id", updateNotas);
router.delete("/:id", deleteNotas);

export default router;
