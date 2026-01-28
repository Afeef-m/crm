import {
  CircleChevronLeft,
  CircleChevronRight,
  CircleEllipsis,
  Pen,
} from "lucide-react";
import Image from "next/image";

export default function CompanyHeader() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      {/* TOP ROW */}
      <div className="flex items-center justify-between">
        {/* LEFT: LOGO + NAME */}
        <div className="flex items-center gap-4">
          <Image src="/logo.svg" alt="logo" width={48} height={48} />

          <div>
            <h1 className="text-xl font-semibold">SuperCompany Ltd ASA</h1>
            <p className="text-sm text-gray-500">Department Stockholm</p>
          </div>
        </div>

        {/* RIGHT: NAV ICONS */}
        <div className="flex items-center gap-2 text-gray-500">
          <button className="p-2 rounded-full bg-amber-600 hover:bg-gray-100 hover:text-gray-800">
            <Pen size={18} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 hover:text-gray-800">
            <CircleEllipsis size={18} />
          </button>
        </div>
      </div>

      {/* DETAILS */}
      <div className="grid grid-cols-2 gap-x-12 gap-y-2 mt-6 text-sm">
        <div className="space-y-2">
          <p>
            <span className="text-gray-400">Postal:</span> Vastagatan 5
          </p>
          <p>
            <span className="text-gray-400">Country:</span> Sweden
          </p>
          <p>
            <span className="text-gray-400">Phone:</span> +46 800 193 2820{" "}
            <span className="text-xs text-gray-400">Main</span>
          </p>
          <p>
            <span className="text-gray-400">Webbaddress:</span> info@sc.se
          </p>
          <p>
            <span className="text-gray-400">Email:</span> www.sc.se
          </p>
        </div>

        <div className="space-y-2">
          <p>
            <span className="text-gray-400">Category:</span> Customer A
          </p>
          <p>
            <span className="text-gray-400">Code:</span> SUPERCO
          </p>
          <p>
            <span className="text-gray-400">Number:</span> 2002
          </p>
          <p>
            <span className="text-gray-400">VAT No:</span> SE123456789
          </p>
          <p>
            <span className="text-gray-400">Business:</span> IT
          </p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t mt-6 pt-4" />

      {/* FOOTER */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="bg-gray-400" />
            Stop
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" />
            No mailings
          </label>
        </div>

        <div>Updated: 28/01/2026</div>
        <div className="flex items-center gap-2 text-gray-500">
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
