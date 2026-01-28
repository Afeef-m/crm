"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSale = exports.getSales = void 0;
const sale_model_1 = require("../models/sale.model");
const getSales = async (_req, res) => {
    const sales = await sale_model_1.Sale.find().sort({ createdAt: -1 });
    res.json(sales);
};
exports.getSales = getSales;
const createSale = async (req, res) => {
    const sale = await sale_model_1.Sale.create(req.body);
    res.status(201).json(sale);
};
exports.createSale = createSale;
