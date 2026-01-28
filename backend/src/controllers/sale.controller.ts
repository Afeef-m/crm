import { Request, Response } from "express";
import { Sale } from "../models/sale.model";

export const getSales = async (_req: Request, res: Response) => {
  const sales = await Sale.find().sort({ createdAt: -1 });
  res.json(sales);
};

export const createSale = async (req: Request, res: Response) => {
  const sale = await Sale.create(req.body);
  res.status(201).json(sale);
};
