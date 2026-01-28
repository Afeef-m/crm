"use client";

import { Sale } from "@/app/types/sale";
import { X } from "lucide-react";
import { useState } from "react";

interface AddSaleModalProps {
  onClose: () => void;
  onAdd: (sale: Sale) => void;
}

export default function AddSaleModal({
  onClose,
  onAdd,
}: AddSaleModalProps) {

  const [form, setForm] = useState<Omit<Sale, "saleDate">>({
  name: "",
  status: "Open",
  amount: "",
  stage: "",
  nextActivity: "",
});


  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    if (!form.name || !form.amount) return;

    onAdd({
      ...form,
      saleDate: new Date().toLocaleDateString("en-GB"),
    });

    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
        
        {/* HEADER */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Add Sale</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* FORM */}
        <div className="space-y-4 text-sm">
          <input
            name="name"
            placeholder="Sale name"
            className="w-full border rounded px-3 py-2"
            onChange={handleChange}
          />

          <select
            name="status"
            className="w-full border rounded px-3 py-2"
            onChange={handleChange}
          >
            <option>Open</option>
            <option>Lost</option>
            <option>Sold</option>
            <option>Stalled</option>
          </select>

          <input
            name="amount"
            placeholder="Amount"
            className="w-full border rounded px-3 py-2"
            onChange={handleChange}
          />

          <input
            name="stage"
            placeholder="Stage (e.g. Proposal 60%)"
            className="w-full border rounded px-3 py-2"
            onChange={handleChange}
          />

          <input
            type="date"
            name="nextActivity"
            className="w-full border rounded px-3 py-2"
            onChange={handleChange}
          />
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm rounded bg-emerald-600 text-white"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
