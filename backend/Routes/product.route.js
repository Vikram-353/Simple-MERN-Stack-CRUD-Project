import express from "express";

import {
  deleteProduct,
  getProduct,
  postProduct,
  putProduct,
} from "../controller/product.control.js";

const router = express.Router();

router.get("/", getProduct);

router.post("/", postProduct);

router.delete("/:id", deleteProduct);

router.put("/:id", putProduct);

export default router;
