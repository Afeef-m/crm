import { Search, Bell, User, ListPlus, BookSearch, TextAlignJustify, PanelRight } from "lucide-react";

export default function Topbar() {
  return (
   <header className="sticky top-0 z-40 h-14 bg-neutral-300 border-b">
  <div className="h-full flex items-center justify-between px-6">

    <div className="flex items-center gap-4">
      <button className="flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-2xl border border-none bg-white hover:bg-gray-100 text-green-800">
        <ListPlus size={16} />
        New
      </button>

      <button className="p-2 rounded-md hover:bg-gray-100 text-green-800">
        <BookSearch size={18} />
      </button>
    </div>

    <div className="flex items-center gap-2 w-96 px-4 py-1.5 border rounded-full bg-white">
      <Search size={16} className="text-gray-400" />
      <input
        type="text"
        placeholder="Search for anything"
        className="w-full text-sm outline-none"
      />
    </div>

    <div className="flex items-center gap-3 text-sm">
      <button className="p-2 rounded-md hover:bg-gray-100 text-green-800">
        <Bell size={18} />
      </button>

      <button className="p-2 rounded-md hover:bg-gray-100 text-green-800">
        <User size={18} />
      </button>

      <button className="p-2 rounded-md hover:bg-gray-100 text-green-800">
        <TextAlignJustify size={18} />
      </button>

      <button className="text-gray-600 hover:underline">
        Help
      </button>

      <button className="p-2 rounded-md hover:bg-gray-100 text-green-800">
        <PanelRight size={18} />
      </button>
    </div>

  </div>
</header>

  );
}
