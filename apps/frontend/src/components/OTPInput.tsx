import { useRef, useState } from "react";

interface OTPInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
}

export default function OTPInput({
  length = 5,
  value,
  onChange,
}: OTPInputProps) {
  const digits = Array.from({ length }, (_, index) => value[index] ?? "");
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const updateDigits = (nextDigits: string[]) => {
    onChange(nextDigits.join(""));
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const input = event.target.value.replace(/\D/g, "");

    if (input === "") {
      const next = [...digits];
      next[index] = "";
      updateDigits(next);
      return;
    }

    const next = [...digits];
    next[index] = input[0] ?? "";
    updateDigits(next);

    if (index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (event.key !== "Backspace") return;

    if (digits[index] !== "") {
      const next = [...digits];
      next[index] = "";
      updateDigits(next);
      return;
    }

    if (index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    const pasted = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);

    if (!pasted) return;

    const next = Array.from({ length }, () => "");

    pasted.split("").forEach((digit, index) => {
      next[index] = digit;
    });

    updateDigits(next);

    inputRefs.current[Math.min(pasted.length, length) - 1]?.focus();
  };

  return (
    <div className="flex gap-3 self-stretch sm:gap-4">
      {digits.map((digit, index) => {
        const isFocused = focusedIndex === index;

        return (
          <div key={index} className="flex-1">
            <input
              key={index}
              ref={(element) => {
                inputRefs.current[index] = element;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(event) => {
                handleChange(event, index);
              }}
              onKeyDown={(event) => {
                handleKeyDown(event, index);
              }}
              onPaste={handlePaste}
              onFocus={() => {
                setFocusedIndex(index);
              }}
              onBlur={() => {
                setFocusedIndex((current) =>
                  current === index ? null : current,
                );
              }}
              aria-label={`OTP digit ${String(index + 1)}`}
              className={`h-12 w-full rounded-[10px] border bg-white text-center text-2xl font-semibold transition-all outline-none ${
                isFocused
                  ? "border-blue-500 shadow-[0px_0px_0px_3px_rgba(11,117,249,0.32)]"
                  : "border-zinc-200"
              }`}
            />
          </div>
        );
      })}
    </div>
  );
}
