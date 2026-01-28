"use client";

import { usePathname, useRouter } from "next/navigation";
import { Gauge, Building2, User, Calendar1, BadgeDollarSign, NotepadText, Ticket, Layers2, AtSign, MessageCircleMore, ChartNoAxesColumnIncreasing, Target, Wrench,} from "lucide-react";

const navItems = [
  { icon: Gauge, path: "/" },
  { icon: Building2, path: "/company" }, 
  { icon: User, path: "/contacts" },
  { icon: Calendar1, path: "/calendar" },
  { icon: BadgeDollarSign, path: "/sales" },
  { icon: NotepadText, path: "/notes" },
  { icon: Ticket, path: "/tickets" },
  { icon: Layers2, path: "/projects" },
  { icon: AtSign, path: "/email" },
  { icon: MessageCircleMore, path: "/messages" },
  { icon: ChartNoAxesColumnIncreasing, path: "/reports" },
  { icon: Target, path: "/goals" },
  { icon: Wrench, path: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className="w-16 bg-emerald-700 text-white flex flex-col items-center py-4 gap-3">
      <div className="text-xl font-bold mb-2">L</div>

      {navItems.map(({ icon: Icon, path }) => {
        const isActive = pathname === path;

        return (
          <button
            key={path}
            onClick={() => router.push(path)}
            className={`p-2 rounded-lg transition
              ${isActive ? "bg-emerald-600" : "hover:bg-emerald-600"}
            `}
          >
            <Icon size={20} />
          </button>
        );
      })}
    </aside>
  );
}
