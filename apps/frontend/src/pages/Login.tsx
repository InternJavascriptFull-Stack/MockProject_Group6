import TextInput from "@/components/TextInput";

export default function Login() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-10">
        <header className="flex items-center justify-between gap-4 pb-8 sm:pb-10">
          <div className="relative h-8">
            <div className="absolute top-[5px] left-[6px]">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M0 11C0 6.30885 0 3.96327 1.23988 2.34743C1.55908 1.93144 1.93144 1.55908 2.34743 1.23988C3.96327 0 6.30885 0 11 0C15.6912 0 18.0367 0 19.6526 1.23988C20.0686 1.55908 20.4409 1.93144 20.7601 2.34743C22 3.96327 22 6.30885 22 11C22 15.6912 22 18.0367 20.7601 19.6526C20.4409 20.0686 20.0686 20.4409 19.6526 20.7601C18.0367 22 15.6912 22 11 22C6.30885 22 3.96327 22 2.34743 20.7601C1.93144 20.4409 1.55908 20.0686 1.23988 19.6526C0 18.0367 0 15.6912 0 11Z"
                  fill="#A2F2EE"
                />
                <path
                  d="M14 0C14 4.41828 17.5817 8 22 8V14C17.5817 14 14 17.5817 14 22H8C8 17.5817 4.41828 14 0 14V8C4.41828 8 8 4.41828 8 0H14ZM11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8Z"
                  fill="#233955"
                />
              </svg>
            </div>
            <div className="absolute top-[6px] left-[38px] font-['Source_Sans_3'] text-xl leading-6 font-semibold text-slate-700">
              WellNest
            </div>
          </div>

          <button
            type="button"
            className="flex items-center gap-1.5 text-sm font-medium tracking-tight text-gray-500 transition-colors hover:text-slate-700"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M8.00073 0.666687C12.0505 0.667039 15.3337 3.9508 15.3337 8.00067C15.3334 12.0502 12.0503 15.3333 8.00073 15.3337C3.95086 15.3337 0.6671 12.0505 0.666748 8.00067C0.666748 3.95058 3.95064 0.666687 8.00073 0.666687ZM8.00073 2.00067C4.68702 2.00067 2.00073 4.68696 2.00073 8.00067C2.00108 11.3141 4.68724 14.0007 8.00073 14.0007C11.3139 14.0003 14.0004 11.3139 14.0007 8.00067C14.0007 4.68718 11.3141 2.00102 8.00073 2.00067ZM7.91675 10.8337C8.33096 10.8337 8.66675 11.1695 8.66675 11.5837C8.66657 11.9977 8.33085 12.3337 7.91675 12.3337C7.50264 12.3337 7.16692 11.9977 7.16675 11.5837C7.16675 11.1695 7.50253 10.8337 7.91675 10.8337ZM8.16675 3.66669C9.93919 3.66685 11.1667 5.03806 11.1667 6.55634C11.1663 7.9224 10.0384 8.67066 9.11499 9.10321C8.86794 9.21893 8.70953 9.41602 8.66382 9.62469L8.62378 9.80927C8.54502 10.1687 8.18931 10.3965 7.82983 10.3181C7.47044 10.2392 7.24255 9.88359 7.32104 9.52411L7.36206 9.34052C7.50868 8.67024 7.98183 8.16112 8.54956 7.8952C9.43989 7.47807 9.83334 7.05429 9.83374 6.55634C9.83374 5.76554 9.19394 5.00083 8.16675 5.00067C7.72224 5.00073 7.40645 5.12308 7.15601 5.32489C6.89255 5.53723 6.65615 5.8742 6.448 6.36981C6.30536 6.70871 5.91506 6.86823 5.57593 6.72626C5.23652 6.58371 5.07702 6.19264 5.21948 5.85321C5.47796 5.23785 5.82529 4.68553 6.32007 4.2868C6.82775 3.87781 7.44508 3.66675 8.16675 3.66669Z"
                fill="#666D80"
              />
            </svg>
            <span>Get help</span>
          </button>
        </header>

        <main className="flex flex-1 items-center justify-center py-6 sm:py-10">
          <section className="w-full max-w-[520px] rounded-[20px] bg-white p-6 shadow-[0px_24px_60px_rgba(15,23,42,0.08)] sm:p-8">
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-[96px] bg-gradient-to-b from-sky-100/50 via-sky-100/0 to-sky-100/0 p-4 outline outline-1 outline-offset-[-1px] outline-sky-100">
                <div className="flex items-center justify-center rounded-[96px] bg-white p-3.5 shadow-[0px_2px_4px_0px_rgba(179,212,253,0.04)] outline outline-1 outline-offset-[-1px] outline-blue-200">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M14 13H10C7.23858 13 5 15.2386 5 18V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V18C19 15.2386 16.7614 13 14 13Z"
                      fill="#0B75F9"
                    />
                    <path
                      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                      fill="#0B75F9"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl leading-8 font-semibold text-zinc-950 sm:text-[28px] sm:leading-9">
                  Welcome Back
                </h1>
                <p className="max-w-md text-sm leading-6 tracking-tight text-gray-500 sm:text-base">
                  Glad to see you again. Log in to your account.
                </p>
              </div>
            </div>

            <form className="mt-8 flex flex-col gap-4">
              <TextInput
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
              />
              <TextInput
                label="Password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                showPasswordToggle
              />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <label className="flex cursor-pointer items-center gap-2 text-sm leading-5 tracking-tight text-zinc-950">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-[4.4px] border border-[#DFE1E7] bg-white">
                    <span className="h-2.5 w-2.5 rounded-[3px] bg-transparent" />
                  </span>
                  Keep me logged in
                </label>

                <a
                  href="#forgot-password"
                  className="self-start text-sm leading-5 font-medium tracking-tight text-sky-800 transition-colors hover:text-sky-900 sm:self-auto sm:text-right"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-slate-700 px-4 py-2 text-base leading-6 font-semibold tracking-tight text-white shadow-[0px_1px_2px_0px_rgba(13,13,18,0.06)] transition-colors hover:bg-slate-800 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:outline-none"
              >
                Login
              </button>

              <p className="text-center text-sm leading-6 tracking-tight text-gray-500 sm:text-base">
                Don't have account?{" "}
                <button
                  type="button"
                  className="font-medium text-sky-800 transition-colors hover:text-sky-900"
                >
                  Register
                </button>
              </p>
            </form>
          </section>
        </main>

        <footer className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-center sm:flex-row sm:text-left">
          <div className="text-sm leading-5 tracking-tight text-gray-500">
            © 2025 Clinicare. All rights reserved.
          </div>
          <button
            type="button"
            className="flex items-center gap-1.5 text-sm leading-5 font-medium tracking-tight text-gray-500 transition-colors hover:text-slate-700"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M8.00073 0.666687C12.0505 0.667039 15.3337 3.9508 15.3337 8.00067C15.3334 12.0502 12.0503 15.3333 8.00073 15.3337C3.95086 15.3337 0.6671 12.0505 0.666748 8.00067C0.666748 3.95058 3.95064 0.666687 8.00073 0.666687ZM8.00073 2.00067C4.68702 2.00067 2.00073 4.68696 2.00073 8.00067C2.00108 11.3141 4.68724 14.0007 8.00073 14.0007C11.3139 14.0003 14.0004 11.3139 14.0007 8.00067C14.0007 4.68718 11.3141 2.00102 8.00073 2.00067ZM7.91675 10.8337C8.33096 10.8337 8.66675 11.1695 8.66675 11.5837C8.66657 11.9977 8.33085 12.3337 7.91675 12.3337C7.50264 12.3337 7.16692 11.9977 7.16675 11.5837C7.16675 11.1695 7.50253 10.8337 7.91675 10.8337ZM8.16675 3.66669C9.93919 3.66685 11.1667 5.03806 11.1667 6.55634C11.1663 7.9224 10.0384 8.67066 9.11499 9.10321C8.86794 9.21893 8.70953 9.41602 8.66382 9.62469L8.62378 9.80927C8.54502 10.1687 8.18931 10.3965 7.82983 10.3181C7.47044 10.2392 7.24255 9.88359 7.32104 9.52411L7.36206 9.34052C7.50868 8.67024 7.98183 8.16112 8.54956 7.8952C9.43989 7.47807 9.83334 7.05429 9.83374 6.55634C9.83374 5.76554 9.19394 5.00083 8.16675 5.00067C7.72224 5.00073 7.40645 5.12308 7.15601 5.32489C6.89255 5.53723 6.65615 5.8742 6.448 6.36981C6.30536 6.70871 5.91506 6.86823 5.57593 6.72626C5.23652 6.58371 5.07702 6.19264 5.21948 5.85321C5.47796 5.23785 5.82529 4.68553 6.32007 4.2868C6.82775 3.87781 7.44508 3.66675 8.16675 3.66669Z"
                fill="#666D80"
              />
            </svg>
            <span>Get help</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
