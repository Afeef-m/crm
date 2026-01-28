import express from "express";
import cors from "cors"
import saleRoutes from "./routes/sale.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/sales", saleRoutes);

export default app;
