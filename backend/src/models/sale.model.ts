import { Schema, model } from "mongoose";

const saleSchema = new Schema(
  {
    name: { type: String, required: true },
    status: {
      type: String,
      enum: ["Open", "Lost", "Sold", "Stalled"],
      required: true,
    },
    amount: { type: String, required: true },
    stage: { type: String, required: true },
    saleDate: { type: String, required: true },
    nextActivity: { type: String, required: true },
  },
  { timestamps: true }
);

export const Sale = model("Sale", saleSchema);
