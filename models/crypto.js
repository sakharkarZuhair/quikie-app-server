import mongoose from "mongoose";

const cryptoSchema = mongoose.Schema({
  icon_url: { type: String, required: true },
  max_supply: { type: Number, required: true },
  name: { type: String, required: true },
  name_full: { type: String, required: true },
  price: { type: Number, required: true },
  symbol: { type: String, required: true },
});

export default mongoose.model("Crypto", cryptoSchema);
