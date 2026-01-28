"use client";

import {
  CircleChevronLeft,
  CircleChevronRight,
  CircleEllipsis,
  Pen,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import CompanyDetails from "./companyDetails";

const tabs = ["Company", "More", "Intrest", "Note", "Market Data", "Misc"];

export default function CompanyHeader() {
  const [activeTab, setActiveTab] = useState("Company");

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/logo.svg" alt="logo" width={48} height={48} />
          <div>
            <h1 className="text-xl font-semibold">SuperCompany Ltd ASA</h1>
            <p className="text-sm text-gray-500">Department Stockholm</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <button className="p-2 rounded-full bg-amber-600 hover:bg-gray-100 hover:text-gray-800">
            <Pen size={18} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 hover:text-gray-800 rotate-90">
            <CircleEllipsis size={18} />
          </button>
        </div>
      </div>
      <div className="flex gap-5 mt-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 text-sm font-medium transition
                ${
                  isActive
                    ? "text-green-700 bg-green-100 rounded-2xl border border-green-600"
                    : "text-gray-500 hover:text-gray-700"
                }
              `}
            >
              {tab}
            </button>
          );
        })}
      </div>
      <div className="mt-6">
        {activeTab === "Company" ? (
          <CompanyDetails />
        ) : (
          <div className="text-sm text-gray-400">
            No data available for{" "}
            <span className="font-medium">{activeTab}</span>.
          </div>
        )}
      </div>
      <div className="border-t mt-6 pt-4" />

      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-gray-500" />
            Stop
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-gray-500" />
            No mailings
          </label>
        </div>

        <div>Updated: 28/01/2026</div>

        <div className="flex items-center gap-2">
          <button className="hover:text-gray-800">
            <CircleChevronLeft size={20} />
          </button>
          <button className="hover:text-gray-800">
            <CircleChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}