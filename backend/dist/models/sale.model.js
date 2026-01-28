"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sale = void 0;
const mongoose_1 = require("mongoose");
const saleSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
exports.Sale = (0, mongoose_1.model)("Sale", saleSchema);
