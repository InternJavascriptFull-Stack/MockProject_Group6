import { SidebarNavigation } from "./components/carePlan/sidebarNavigation";
import { PatientBanner } from "./components/carePlan/patientBanner";
import { CarePlanTabs } from "./components/carePlan/carePlanTabs";
import { ActiveProblemCard } from "./components/carePlan/activeProblemCard";
import { CareGoalCard } from "./components/carePlan/careGoalCard";
import { InterventionsTable } from "./components/carePlan/interventionsTable";
import { RecentObservationCard } from "./components/carePlan/recentObservationCard";
import { ActionFooter } from "./components/carePlan/actionFooter";
import "./App.css";

/**
 * Main App container layout stitching components together.
 */
function App() {
  return (
    <div className="bg-brand-bg-app flex min-h-screen font-sans">
      {/* Left Sidebar */}
      <SidebarNavigation />

      {/* Main Content Area */}
      <div className="flex min-h-screen flex-1 flex-col justify-between overflow-x-hidden">
        {/* Header Banner & Tabs */}
        <div>
          <PatientBanner />
          <CarePlanTabs />
        </div>

        {/* Main Workspace Dashboard Content */}
        <main className="flex-1 space-y-6 p-8">
          {/* Split View Content Layout */}
          <div className="grid grid-cols-1 items-stretch gap-6 xl:grid-cols-[33%_67%]">
            {/* Left column: Problem and Goal cards */}
            <div className="grid grid-cols-1 gap-6">
              <ActiveProblemCard />
              <CareGoalCard />
            </div>

            {/* Right column: Interventions and Tasks Table */}
            <div className="flex">
              <div className="flex flex-1 flex-col">
                <InterventionsTable />
              </div>
            </div>
          </div>

          {/* Full Width Bottom Observation */}
          <RecentObservationCard />
        </main>

        {/* Sticky Action Footer */}
        <ActionFooter />
      </div>
    </div>
  );
}

export default App;
