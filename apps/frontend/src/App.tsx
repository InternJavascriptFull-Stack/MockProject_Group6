import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from "./components/layout/MainLayout";
import { EmarPage } from "./pages/emar/EmarPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/emar" replace />} />
          <Route path="/emar" element={<EmarPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
