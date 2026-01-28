import express from "express";
import cors from "cors"
import saleRoutes from "./routes/sale.routes";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",          
      "https://crm-orpin-nine.vercel.app" 
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/sales", saleRoutes);

export default app;
