import { BadgeDollarSign, Calendar1, ListPlus, NotepadText, PanelBottomOpen, PanelTopOpen, Sparkles } from "lucide-react";

function PreviewCard() {
  return (
    <div className="border-b pb-4 mb-4">
      <p className="text-xs text-gray-400 mb-2">PREVIEW</p>

      <h3 className="text-lg font-semibold text-emerald-700">
        45 Components - RTS
      </h3>

      <p className="text-sm text-gray-500 mb-4">17 344 EUR</p>

      <div className="space-y-2 text-sm">
        <Row label="Company" value="SuperCompany Ltd ASA" />
        <Row label="Contact" value="Peter Elliot" />
        <Row label="Sale date" value="01/02/2025" />
        <Row label="Owner" value="Eric Davies" />
        <Row label="Status" value="Open (20%)" />
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-2">
      <span className="text-gray-400">{label}</span>
      <span className="text-gray-700 text-right">{value}</span>
    </div>
  );
}

function Activities() {
  return (
    <div className="border-b pb-4 mb-4">
      <h4 className="text-sm font-semibold mb-2">Activities</h4>
      <ul className="space-y-2 text-sm text-emerald-700">
        <li>04/11/2024 – Follow-up call</li>
        <li>01/11/2024 – Quote for 45 components</li>
        <li>23/09/2024 – Prospect meeting</li>
        <li>22/09/2024 – Introduction call</li>
      </ul>
    </div>
  );
}
function Stakeholders() {
  return (
    <div>
      <h4 className="text-sm font-semibold mb-2">Stakeholders</h4>
      <ul className="text-sm text-gray-600 space-y-1">
        <li>James Vargas</li>
        <li>Lisa Jansson</li>
      </ul>
    </div>
  );
}

export default function RightPanel() {
  return (
    <aside className="bg-white rounded-lg shadow-sm p-4 h-[calc(100vh-7rem)] sticky top-20 overflow-y-auto">
     <div className="flex items-center justify-between mb-4 pb-3 border-b">
  
  {/* LEFT ICON GROUP */}
  <div className="flex items-center gap-3 text-gray-600">
    <button className="p-2 rounded-md hover:bg-gray-100">
      <ListPlus size={18} />
    </button>
    <button className="p-2 rounded-md hover:bg-gray-100">
      <BadgeDollarSign size={18} />
    </button>
    <button className="p-2 rounded-md hover:bg-gray-100">
      <Calendar1 size={18} />
    </button>
    <button className="p-2 rounded-md hover:bg-gray-100">
      <NotepadText size={18} />
    </button>
    <button className="p-2 rounded-md hover:bg-gray-100">
      <Sparkles size={18} />
    </button>
  </div>

  {/* RIGHT TOGGLE ICON */}
  {/* <button className="p-2 rounded-md hover:bg-gray-100">
    <PanelRight size={18} />
  </button> */}

</div>

      <PreviewCard />
      <Activities />
      <Stakeholders />
    </aside>
  );
}