import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import { ResidentListPage } from "./pages/residents/ResidentListPage";
import { ResidentReceptionPage } from "./pages/residents/ResidentReceptionPage";

export function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/residents" replace />} />
        <Route path="/residents" element={<ResidentListPage />} />
        <Route
          path="/residents/reception"
          element={<ResidentReceptionPage />}
        />
      </Route>
    </Routes>
  );
}
