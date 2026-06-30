import { useNavigate } from "react-router-dom";

import WellNestLogo from "@/assets/images/WellNest.png";

export default function LoginHeader() {
  const navigate = useNavigate();

  const handleBrandClick = () => {
    void navigate("/");
  };

  return (
    <header className="flex items-center justify-between gap-4 pb-8 sm:pb-10">
      <div
        className="flex h-8 w-auto cursor-pointer gap-[10px]"
        onClick={handleBrandClick}
      >
        <img
          src={WellNestLogo}
          alt="WellNest Logo"
          className="block h-[24px] w-[24px] object-contain object-center"
        />

        <p className="font-['Calibri_Light'] text-xl leading-6 font-extrabold text-slate-700">
          WellNest
        </p>
      </div>
    </header>
  );
}
