export type SaleStatus = "Open" | "Lost" | "Sold" | "Stalled";

export interface Sale {
  name: string;
  status: SaleStatus;
  amount: string;
  stage: string;
  saleDate: string;
  nextActivity: string;
}
