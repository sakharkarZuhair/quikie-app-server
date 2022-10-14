import mongoose from "mongoose";
import Crypto from "../models/crypto.js";

export const createCryptoData = async (req, res) => {
  const data = req.body;
  // console.log(req.body);
  const newData = new Crypto({
    ...data,
  });
  try {
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getCryptoData = async (req, res) => {
  try {
    const data = await Crypto.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const removeCryptoData = async (req, res) => {
  const { id } = req.params;
  // console.log(req.body);
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No Data with that id");

    await Crypto.findByIdAndRemove(id);
    res.json({ message: "POST DELETED" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
