import React from "react";
import { Search, Settings, Bell, ChevronDown, Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex h-16 md:h-20 items-center justify-between border-b border-slate-200 bg-white px-4 md:px-8">
      {/* Mobile left side: Logo and Title */}
      <div className="flex md:hidden items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E0F2FE] text-[#0284C7]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M2 12h20" />
            <circle cx="12" cy="12" r="4" fill="currentColor" />
          </svg>
        </div>
        <span className="text-xl font-bold text-slate-800">Doctors</span>
      </div>

      {/* Desktop left side: Search bar */}
      <div className="hidden md:flex w-96 items-center rounded-full bg-slate-100 px-4 py-2">
        <Search className="h-4 w-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search anything"
          className="ml-3 w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
        />
      </div>

      {/* Desktop right side: Actions & Profile */}
      <div className="hidden md:flex items-center gap-4">
        <div className="flex items-center gap-3 pr-4 border-r border-slate-200">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200">
            <Settings className="h-4 w-4" />
          </button>
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200">
            <Bell className="h-4 w-4" />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-slate-100" />
          </button>
        </div>

        <div className="flex cursor-pointer items-center gap-3 rounded-full hover:bg-slate-50 p-1 pr-2 transition-colors">
          <div className="h-10 w-10 rounded-lg bg-[#A5F3FC]"></div>
          <span className="text-sm font-medium text-slate-700">
            Alfredo Westervelt
          </span>
          <ChevronDown className="h-4 w-4 text-slate-400" />
        </div>
      </div>

      {/* Mobile right side: Hamburger */}
      <button className="md:hidden flex h-10 w-10 items-center justify-center text-slate-600">
        <Menu className="h-6 w-6" />
      </button>
    </header>
  );
};
