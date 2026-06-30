import { useEffect, useState } from "react";

import "./App.css";

import EnterNewPass from "./pages/EnterNewPass";
import ForgotPass from "./pages/ForgotPass";
import Login from "./pages/Login";

type ViewName = "login" | "forgot-password" | "enter-new-password";

function getViewFromHash(hash: string): ViewName {
  switch (hash) {
    case "#forgot-password":
      return "forgot-password";
    case "#enter-new-password":
      return "enter-new-password";
    default:
      return "login";
  }
}

function App() {
  const [view, setView] = useState<ViewName>(() =>
    getViewFromHash(window.location.hash),
  );

  useEffect(() => {
    const handleHashChange = () => {
      setView(getViewFromHash(window.location.hash));
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  if (view === "forgot-password") {
    return <ForgotPass />;
  }

  if (view === "enter-new-password") {
    return <EnterNewPass />;
  }

  return <Login />;
}

export default App;
