"use client";

import { useState } from "react";
import SalesTable from "../sales/salesTable";

const tabs = ["Activities", "Contacts", "Projects", "Sales", "Requests"];

export default function CompanyTabs() {
  const [active, setActive] = useState("Sales");

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="flex gap-2 px-4 pt-4">
  {tabs.map((tab) => {
    const isActive = active === tab;
    return (
      <button
        key={tab}
        onClick={() => setActive(tab)}
        className={`px-4 py-2 text-sm font-medium rounded-full transition
          ${
            isActive
              ? "bg-emerald-100 text-emerald-700"
              : "text-gray-500 hover:text-gray-700"
          }
        `}
      >
        {tab}
      </button>
    );
  })}
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
