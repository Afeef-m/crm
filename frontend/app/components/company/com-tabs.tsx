"use client";

import { useState } from "react";
import SalesTable from "../sales/salesTable";

const tabs = ["Company", "Activities", "Contacts", "Sales", "Requests"];

export default function CompanyTabs() {
  const [active, setActive] = useState("Sales");

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-3 text-sm font-medium border-b-2 ${
              active === tab
                ? "border-emerald-600 text-emerald-600"
                : "border-transparent text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-4">
        {active === "Sales" && <SalesTable />}
        {active !== "Sales" && (
          <p className="text-sm text-gray-500">
            {active} content placeholder
          </p>
        )}
      </div>
    </div>
  );
}
