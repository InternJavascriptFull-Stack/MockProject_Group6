import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  showPasswordToggle?: boolean;
  error?: string;
}

export default function TextInput({
  label,
  error,
  type = "text",
  showPasswordToggle = false,
  className = "",
  id,
  ...props
}: TextInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  const inputType = showPasswordToggle && showPassword ? "text" : type;

  return (
    <div className="flex flex-col gap-2 self-stretch">
      <label
        htmlFor={inputId}
        className="font-['Calibri_Light'] text-sm leading-5 font-medium tracking-tight text-gray-500"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={inputId}
          type={inputType}
          className={`h-10 w-full rounded-[10px] border bg-white px-3 ${
            showPasswordToggle ? "pr-11" : ""
          } ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-zinc-200 focus:border-sky-500"
          } transition-colors outline-none ${className}`}
          {...props}
        />

        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => {
              setShowPassword((prev) => !prev);
            }}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 transition-colors hover:text-gray-700"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
