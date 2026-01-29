"use client";
import {
  Download,
  Funnel,
  MoveDown,
  Plus,
  RotateCw,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";
import AddSaleModal from "./addSale";
import { Sale } from "@/app/types/sale";
import { API_BASE_URL } from "@/app/lib/api";

const statusStyle: Record<string, string> = {
  Open: "bg-emerald-100 text-emerald-700",
  Lost: "bg-red-100 text-red-600",
  Sold: "bg-blue-100 text-blue-600",
  Stalled: "bg-orange-100 text-orange-600",
};

const ITEMS_PER_PAGE = 3;

export default function SalesTable() {
  const [sales, setSales] = useState<Sale[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
  fetch(`${API_BASE_URL}/sales`)
    .then((res) => res.json())
    .then((data) => {
      setSales(data);
      setLoading(false);
    });
}, []);

async function handleAddSale(newSale: Sale) {
  await fetch(`${API_BASE_URL}/sales`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newSale),
  });

  const res = await fetch(`${API_BASE_URL}/sales`);
  const updated = await res.json();
  setSales(updated);
  setPage(1);
}

  const totalPages = Math.ceil(sales.length / ITEMS_PER_PAGE);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginatedSales = sales.slice(start, start + ITEMS_PER_PAGE);
if (loading) {
  return <div className="p-4 text-sm text-gray-500">Loading sales…</div>;
}
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
              <td>{s.amount}</td>
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

        <button className="ml-auto inline-flex items-center hover:text-gray-700">
          <RotateCw size={16} />
        </button>
      </div>

      {open && (
        <AddSaleModal
          onClose={() => setOpen(false)}
          onAdd={handleAddSale}
        />
      )}

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
