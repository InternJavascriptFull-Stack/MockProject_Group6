import {
  LayoutDashboard,
  CheckSquare,
  BedDouble,
  Stethoscope,
  Building2,
  CalendarDays,
  CreditCard,
  Package,
  MessageSquare,
  Lock,
  FileText
} from "lucide-react";
import { cn } from "../../lib/utils";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "#" },
  { icon: CheckSquare, label: "Appointments", href: "#" },
  { icon: BedDouble, label: "Patients", href: "#" },
  { icon: Stethoscope, label: "Doctors", href: "#" },
  { icon: Building2, label: "Departments", href: "#" },
  { icon: FileText, label: "eMAR", href: "/emar" },
  { icon: CalendarDays, label: "Doctors' Schedule", href: "/doctor-schedule" },
  { icon: CreditCard, label: "Payments", href: "#" },
  { icon: Package, label: "Inventory", href: "#" },
  { icon: MessageSquare, label: "Messages", href: "#", notification: 7 },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="hidden md:flex h-screen md:w-20 lg:w-64 flex-col border-r border-slate-200 bg-white transition-all duration-300">
      <div className="flex h-20 items-center justify-center lg:justify-start lg:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E0F2FE] text-[#0284C7]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M2 12h20" />
              <circle cx="12" cy="12" r="4" fill="currentColor" />
            </svg>
          </div>
          <span className="hidden lg:block text-xl font-bold text-slate-800">WellNest</span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-1 no-scrollbar flex flex-col items-center lg:items-stretch">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname.startsWith(item.href) && item.href !== "#";
          
          return (
            <Link
              key={index}
              to={item.href}
              className={cn(
                "flex items-center justify-center lg:justify-between rounded-full lg:px-4 py-3 text-sm font-medium transition-colors w-12 h-12 lg:w-auto lg:h-auto",
                isActive
                  ? "bg-[#CCFBF1] text-[#0F766E]"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              )}
              title={item.label}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={cn(
                    "h-5 w-5 shrink-0",
                    isActive ? "text-[#0F766E]" : "text-slate-400"
                  )}
                />
                <span className="hidden lg:block">{item.label}</span>
              </div>
              {item.notification && (
                <span className="hidden lg:flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white shrink-0">
                  {item.notification}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
