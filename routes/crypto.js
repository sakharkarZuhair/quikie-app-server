import express from "express";
import {
  createCryptoData,
  getCryptoData,
  removeCryptoData,
} from "../controllers/cryptoController.js";

const router = express.Router();

router.post("/createData", createCryptoData);
router.get("/getData", getCryptoData);
router.delete("/delete/:id", removeCryptoData);

export default router;
