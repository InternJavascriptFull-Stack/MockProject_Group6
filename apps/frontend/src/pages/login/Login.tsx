import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFadeSwitch } from "@/hooks/useFadeSwitch";

import TextInput from "@/components/TextInput";
import LoginHeader from "@/pages/login/LoginHeader";
import LoginFooter from "@/pages/login/LoginFooter";

import UserIcon from "@/assets/images/UserIcon.png";

type Panel = "LoginPanel" | "RegisterPanel";

interface HeadingProps {
  changePanel: (panel: Panel) => void;
}

function LoginPanel({ changePanel }: HeadingProps) {
  const navigate = useNavigate();

  const handleToRegister = () => {
    changePanel("RegisterPanel");
  };

  const handleForgotPassword = () => {
    void navigate("/login/forgot-password");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    let valid = true;

    if (!email.includes("@")) {
      setEmailError("Invalid email address.");
      valid = false;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      valid = false;
    }

    if (!valid) return;

    console.log("Send to backend - Login");
  };

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <div className="rounded-[76px] bg-gradient-to-b from-sky-100/50 via-sky-100/0 to-sky-100/0 p-4 outline outline-1 outline-offset-[-1px] outline-sky-100">
          <div className="flex items-center justify-center rounded-[76px] bg-white p-3.5 shadow-[0px_2px_4px_0px_rgba(179,212,253,0.04)] outline outline-1 outline-offset-[-1px] outline-blue-200">
            <img
              src={UserIcon}
              alt="User Icon"
              className="block h-[20px] w-[20px] object-contain object-center"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl leading-8 font-semibold text-zinc-950 sm:text-[22px] sm:leading-9">
            Welcome Back
          </h1>
          <p className="max-w-md text-sm leading-6 tracking-tight text-gray-500 sm:text-base">
            Glad to see you again. Log in to your account.
          </p>
        </div>
      </div>

      <form className="mt-4 flex flex-col gap-[18px]" onSubmit={handleLogin}>
        <TextInput
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError("");
          }}
          error={emailError}
        />
        <TextInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          showPasswordToggle
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError("");
          }}
          error={passwordError}
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <label className="flex cursor-pointer items-center gap-2 text-sm leading-5 tracking-tight text-zinc-950">
            <input
              type="checkbox"
              id="KeepLoggedIn"
              name="KeepLoggedIn"
              value="KeepLoggedIn"
            ></input>
            Keep me logged in
          </label>

          <a
            onClick={handleForgotPassword}
            className="cursor-pointer self-start text-sm leading-5 font-semibold tracking-tight text-sky-800 transition-colors hover:text-sky-900 sm:self-auto sm:text-right"
          >
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="inline-flex h-12 cursor-pointer items-center justify-center rounded-xl bg-slate-700 px-4 py-2 text-base leading-6 font-semibold tracking-tight text-white shadow-[0px_1px_2px_0px_rgba(13,13,18,0.06)] transition-colors hover:bg-slate-800 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:outline-none"
        >
          Login
        </button>

        <p className="text-center text-sm leading-6 tracking-tight text-gray-500 sm:text-base">
          Don't have account?{" "}
          <button
            onClick={handleToRegister}
            type="button"
            className="cursor-pointer font-semibold text-sky-800 transition-colors hover:text-sky-900"
          >
            Register
          </button>
        </p>
      </form>
    </>
  );
}

function RegisterPanel({ changePanel }: HeadingProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleToLogin = () => {
    changePanel("LoginPanel");
  };

  const handleRegister = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    let valid = true;

    if (fullName.trim() === "") {
      setFullNameError("Full name is required.");
      valid = false;
    }

    if (!email.includes("@")) {
      setEmailError("Invalid email address.");
      valid = false;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      valid = false;
    }

    if (!valid) return;

    console.log("Send to backend - Register");
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-[96px] bg-gradient-to-b from-sky-100/50 via-sky-100/0 to-sky-100/0 p-4 outline outline-1 outline-offset-[-1px] outline-sky-100">
          <div className="flex items-center justify-center rounded-[96px] bg-white p-3.5 shadow-[0px_2px_4px_0px_rgba(179,212,253,0.04)] outline outline-1 outline-offset-[-1px] outline-blue-200">
            <img
              src={UserIcon}
              alt="User Icon"
              className="block h-[24px] w-[24px] object-contain object-center"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl leading-8 font-semibold text-zinc-950 sm:text-[22px] sm:leading-9">
            Create Account
          </h1>
          <p className="max-w-md text-sm leading-6 tracking-tight text-gray-500 sm:text-base">
            Enter your details to sign up
          </p>
        </div>
      </div>

      <form className="mt-8 flex flex-col gap-[24px]" onSubmit={handleRegister}>
        <TextInput
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          autoComplete="name"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
            setFullNameError("");
          }}
          error={fullNameError}
        />
        <TextInput
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError("");
          }}
          error={emailError}
        />
        <TextInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          showPasswordToggle
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError("");
          }}
          error={passwordError}
        />

        <button
          type="submit"
          className="inline-flex h-12 cursor-pointer items-center justify-center rounded-xl bg-slate-700 px-4 py-2 text-base leading-6 font-semibold tracking-tight text-white shadow-[0px_1px_2px_0px_rgba(13,13,18,0.06)] transition-colors hover:bg-slate-800 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:outline-none"
        >
          Register
        </button>

        <p className="text-center text-sm leading-6 tracking-tight text-gray-500 sm:text-base">
          Already have account?{" "}
          <button
            type="button"
            onClick={handleToLogin}
            className="cursor-pointer font-semibold text-sky-800 transition-colors hover:text-sky-900"
          >
            Login
          </button>
        </p>
      </form>
    </>
  );
}

export default function Login() {
  const { currentPanel, isVisible, changePanel } = useFadeSwitch<Panel>({
    initialPanel: "LoginPanel",
    duration: 700,
  });

  const panels = {
    LoginPanel: <LoginPanel changePanel={changePanel} />,
    RegisterPanel: <RegisterPanel changePanel={changePanel} />,
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-4 py-6 sm:px-6 lg:px-10">
        <LoginHeader />

        <main className="flex flex-1 items-center justify-center py-4">
          <section className="w-full max-w-[460px] rounded-[20px] bg-white p-6 shadow-[0px_24px_60px_rgba(15,23,42,0.08)] sm:p-8">
            <div
              className={`transition-opacity duration-700 ease-in-out ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {panels[currentPanel]}
            </div>
          </section>
        </main>

        <LoginFooter />
      </div>
    </div>
  );
}
