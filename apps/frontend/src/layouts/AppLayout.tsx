import {
  Building2,
  Calendar,
  ClipboardList,
  CreditCard,
  HeartPulse,
  LayoutDashboard,
  Package,
  Stethoscope,
  UserRound,
  Users,
} from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const navigationItems = [
  {
    label: "Dashboard",
    to: "/",
    icon: LayoutDashboard,
    end: true,
  },
  {
    label: "Residents",
    to: "/residents",
    icon: Users,
    end: true,
  },
  {
    label: "Reception",
    to: "/residents/reception",
    icon: ClipboardList,
    end: true,
  },
  {
    label: "Doctors",
    to: "/doctors",
    icon: Stethoscope,
    end: true,
  },
  {
    label: "Appointments",
    to: "/appointments",
    icon: Calendar,
    end: true,
  },
  {
    label: "Departments",
    to: "/departments",
    icon: Building2,
    end: true,
  },
  {
    label: "Payments",
    to: "/payments",
    icon: CreditCard,
    end: true,
  },
  {
    label: "Inventory",
    to: "/inventory",
    icon: Package,
    end: true,
  },
];

export function AppLayout() {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand__icon">
            <HeartPulse size={24} />
          </div>
          <div>
            <strong>WellNest</strong>
            <span>Nursing Home</span>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Main navigation">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  isActive ? "sidebar-link sidebar-link--active" : "sidebar-link"
                }
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>

      <div className="content-area">
        <header className="topbar">
          <div className="topbar-resident">
            <div className="topbar-avatar">
              ER
              <span aria-hidden="true" />
            </div>
            <div>
              <strong>Resident Management</strong>
              <span>Reception, evaluation, and census tracking</span>
            </div>
          </div>

          <div className="alert-chips" aria-label="Resident alerts">
            <span className="alert-chip alert-chip--danger">DNR/DNI</span>
            <span className="alert-chip alert-chip--danger">
              Allergy: Penicillin
            </span>
            <span className="alert-chip alert-chip--neutral">High Fall Risk</span>
          </div>

          <div className="user-chip">
            <span>
              <UserRound size={16} />
            </span>
            <strong>Sarah Johnson</strong>
          </div>
        </header>

        <Outlet />
      </div>
    </div>
  );
}
