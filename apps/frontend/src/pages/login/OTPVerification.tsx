import { useState } from "react";
import { useNavigate } from "react-router-dom";

import OTPInput from "@/components/OTPInput";
import LoginHeader from "@/pages/login/LoginHeader";
import LoginFooter from "@/pages/login/LoginFooter";

import MailIcon from "@/assets/images/MailIcon.png";

export default function OTPVerification() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleVerifyOTP = () => {
    console.log(otp);

    if (otp.length !== 5) {
      return;
    }

    void navigate("/login/enter-new-password");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-4 py-6 sm:px-6 lg:px-10">
        <LoginHeader />

        <main className="flex flex-1 items-center justify-center py-4">
          <section className="w-full max-w-[460px] rounded-[20px] bg-white p-6 shadow-[0px_24px_60px_rgba(15,23,42,0.08)] sm:p-8">
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-[76px] bg-gradient-to-b from-sky-100/50 via-sky-100/0 to-sky-100/0 p-4 outline outline-1 outline-offset-[-1px] outline-sky-100">
                <div className="flex items-center justify-center rounded-[76px] bg-white p-3.5 shadow-[0px_2px_4px_0px_rgba(179,212,253,0.04)] outline outline-1 outline-offset-[-1px] outline-blue-200">
                  <img
                    src={MailIcon}
                    alt="Mail Icon"
                    className="block h-[20px] w-[20px] object-contain object-center"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-1 text-center">
                <h1 className="text-2xl leading-8 font-semibold text-zinc-950 sm:text-[22px] sm:leading-9">
                  OTP Verification
                </h1>
                <p className="max-w-md text-sm leading-6 font-normal tracking-tight text-gray-500 sm:text-base">
                  We have sent a verification code to email address{" "}
                  <span className="font-medium text-zinc-950">
                    sabrinagomez@example.com
                  </span>
                </p>
              </div>
            </div>

            <form className="mt-8 flex flex-col gap-[24px]">
              <OTPInput length={5} value={otp} onChange={setOtp} />

              <button
                type="submit"
                onClick={handleVerifyOTP}
                className="inline-flex h-12 cursor-pointer items-center justify-center rounded-xl bg-slate-700 px-4 py-2 text-base leading-6 font-semibold tracking-tight text-white shadow-[0px_1px_2px_0px_rgba(13,13,18,0.06)] transition-colors hover:bg-slate-800 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:outline-none"
              >
                Verify
              </button>

              <p className="text-center text-sm leading-6 tracking-tight text-gray-500 sm:text-base">
                Resend code in{" "}
                <span className="font-semibold text-blue-600">00:37</span>
              </p>
            </form>
          </section>
        </main>

        <LoginFooter />
      </div>
    </div>
  );
}
