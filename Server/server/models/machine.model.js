import mongoose from "mongoose";

const machinerySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category:{
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const Machinery = mongoose.model("Machinery", machinerySchema);

export default Machinery;
