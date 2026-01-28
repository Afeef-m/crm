"use client";
import {
  Download,
  Funnel,
  MoveDown,
  Plus,
  RotateCw,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import AddSaleModal from "./addSale";
import { Sale } from "@/app/types/sale";

const statusStyle: Record<string, string> = {
  Open: "bg-emerald-100 text-emerald-700",
  Lost: "bg-red-100 text-red-600",
  Sold: "bg-blue-100 text-blue-600",
  Stalled: "bg-orange-100 text-orange-600",
};

const ITEMS_PER_PAGE = 3;

export default function SalesTable() {
  const [sales, setSales] = useState<Sale[]>([
    {
      status: "Open",
      saleDate: "01/02/2025",
      amount: "17,344.00",
      stage: "Proposal (60%)",
      nextActivity: "06/11/2024",
      name: "45 Components - RTS",
    },
    {
      status: "Lost",
      saleDate: "07/07/2024",
      amount: "3,200.00",
      stage: "Lost",
      nextActivity: "07/07/2024",
      name: "Premium Support",
    },
  ]);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(sales.length / ITEMS_PER_PAGE);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginatedSales = sales.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="overflow-hidden rounded-lg ">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-500">
          <tr>
            <th className="p-3">
              <input
                ref={(el) => {
                  if (el) el.indeterminate = true;
                }}
                type="checkbox"
                className="h-4 w-4 rounded  text-white accent-emerald-600 "
              />
            </th>

            <th className="text-left">Status</th>
            <th className="text-left">Sale date</th>
            <th className="text-left">Amount</th>
            <th className="text-left">
              <p className="inline-flex items-center gap-1 ">
                Stage
                <MoveDown size={14} />
              </p>
            </th>
            <th className="text-left">Next activity</th>
            <th className="text-left">Sale name</th>
          </tr>
        </thead>

        <tbody>
          {paginatedSales.map((s, i) => (
            <tr key={i} className=" hover:bg-emerald-50 transition">
              <td className="p-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded  text-white accent-emerald-600 "
                />
              </td>

              <td>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${statusStyle[s.status]}`}
                >
                  {s.status}
                </span>
              </td>

              <td>{s.saleDate}</td>
              <td>€ {s.amount}</td>
              <td>{s.stage}</td>
              <td>{s.nextActivity}</td>
              <td className="text-emerald-700 font-medium">{s.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center gap-6 p-4 text-sm text-gray-500 border-t">
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-1.5 hover:text-emerald-700 cursor-pointer"
        >
          <Plus size={16} className="text-amber-500 " />
          Add
        </button>

        <button className="inline-flex items-center gap-1.5 hover:text-red-600 cursor-pointer">
          <Trash2 size={16} className="text-amber-500" />
          Delete
        </button>

        <button className="inline-flex items-center gap-1.5 hover:text-gray-700">
          <Funnel size={16} className="text-amber-500" />
          Filter
        </button>

        <button className="inline-flex items-center gap-1.5 hover:text-gray-700">
          <Download size={16} className="text-amber-500" />
          Export
        </button>

        {/* PUSH TO RIGHT */}
        <button className="ml-auto inline-flex items-center hover:text-gray-700">
          <RotateCw size={16} />
        </button>
      </div>

      {open && (
        <AddSaleModal
          onClose={() => setOpen(false)}
          onAdd={(newSale) => setSales((prev) => [...prev, newSale])}
        />
      )}

      {/* PAGINATION */}
      <div className="flex items-center justify-end gap-3 px-4 pb-4 text-sm text-gray-500">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-1 rounded border disabled:opacity-40 hover:bg-gray-100"
        >
          Prev
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 rounded border disabled:opacity-40 hover:bg-gray-100"
        >
          Next
        </button>
      </div>
    </div>
  );
}
