import React from "react";
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
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "#" },
  { icon: CheckSquare, label: "Appointments", href: "#" },
  { icon: BedDouble, label: "Patients", href: "#" },
  { icon: Stethoscope, label: "Doctors", href: "#" },
  { icon: Building2, label: "Departments", href: "#" },
  {
    icon: CalendarDays,
    label: "Doctors' Schedule",
    href: "/doctor-schedule",
    active: true,
  },
  { icon: CreditCard, label: "Payments", href: "#" },
  { icon: Package, label: "Inventory", href: "#" },
  { icon: MessageSquare, label: "Messages", href: "#", notification: 7 },
];

export const Sidebar = () => {
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
          return (
            <a
              key={index}
              href={item.href}
              className={cn(
                "flex items-center justify-center lg:justify-between rounded-full lg:px-4 py-3 text-sm font-medium transition-colors w-12 h-12 lg:w-auto lg:h-auto",
                item.active
                  ? "bg-[#CCFBF1] text-[#0F766E]"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              )}
              title={item.label}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={cn(
                    "h-5 w-5 shrink-0",
                    item.active ? "text-[#0F766E]" : "text-slate-400"
                  )}
                />
                <span className="hidden lg:block">{item.label}</span>
              </div>
              {item.notification && (
                <span className="hidden lg:flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white shrink-0">
                  {item.notification}
                </span>
              )}
            </a>
          );
        })}
      </nav>

      <div className="p-4 flex justify-center lg:block">
        <div className="rounded-2xl bg-[#0F172A] p-3 lg:p-5 text-white relative overflow-hidden flex flex-col items-center lg:block w-12 h-12 lg:w-auto lg:h-auto justify-center">
          <div className="absolute top-0 right-0 opacity-10 hidden lg:block">
            <div className="w-32 h-32 rounded-full border-[12px] border-white -mr-12 -mt-12" />
          </div>
          <div className="lg:mb-4 inline-flex rounded-xl bg-white/10 p-2.5">
            <Lock className="h-5 w-5 text-white shrink-0" />
          </div>
          <p className="hidden lg:block mb-4 text-sm font-medium leading-relaxed">
            Unlock New Features<br />
            <span className="text-slate-400 font-normal text-xs mt-1 block">
              & Maximize Your Hospital Management Efficiency
            </span>
          </p>
          <div className="hidden lg:flex items-center justify-between mt-2">
            <span className="text-xs text-slate-300 underline cursor-pointer hover:text-white font-medium">What's New?</span>
            <button className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 transition-colors hover:bg-slate-100 shadow-sm">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
