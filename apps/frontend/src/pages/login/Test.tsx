import { useFadeSwitch } from "@/hooks/useFadeSwitch";

type Panel = "heading1" | "heading2" | "heading3";

interface HeadingProps {
  changePanel: (panel: Panel) => void;
}

function Heading1({ changePanel }: HeadingProps) {
  const handleToHeading2 = () => {
    changePanel("heading2");
  };

  return (
    <>
      <h1 className="text-3xl font-bold">Welcome to Heading 1-1</h1>
      <h2 className="mt-2 text-xl">Welcome to Heading 1-2</h2>
      <h2 className="mt-2 text-xl">Welcome to Heading 1-3</h2>

      <button
        className="mt-8 rounded-lg bg-blue-500 px-4 py-2 text-white"
        onClick={handleToHeading2}
      >
        To Heading 2
      </button>
    </>
  );
}

function Heading2({ changePanel }: HeadingProps) {
  const handleToHeading1 = () => {
    changePanel("heading1");
  };

  const handleToHeading3 = () => {
    changePanel("heading3");
  };

  return (
    <>
      <h1 className="text-3xl font-bold">Welcome to Heading 2-1</h1>
      <h2 className="mt-2 text-xl">Welcome to Heading 2-2</h2>
      <h2 className="mt-2 text-xl">Welcome to Heading 2-3</h2>

      <div className="mt-8 flex gap-4">
        <button
          className="rounded-lg bg-green-500 px-4 py-2 text-white"
          onClick={handleToHeading1}
        >
          To Heading 1
        </button>

        <button
          className="rounded-lg bg-purple-500 px-4 py-2 text-white"
          onClick={handleToHeading3}
        >
          To Heading 3
        </button>
      </div>
    </>
  );
}

function Heading3({ changePanel }: HeadingProps) {
  const handleToHeading1 = () => {
    changePanel("heading1");
  };

  return (
    <>
      <h1 className="text-3xl font-bold">Welcome to Heading 3-1</h1>
      <h2 className="mt-2 text-xl">Welcome to Heading 3-2</h2>
      <h2 className="mt-2 text-xl">Welcome to Heading 3-3</h2>

      <button
        className="mt-8 rounded-lg bg-red-500 px-4 py-2 text-white"
        onClick={handleToHeading1}
      >
        To Heading 1
      </button>
    </>
  );
}

export default function Test() {
  const { currentPanel, isVisible, isTransitioning, changePanel } =
    useFadeSwitch<Panel>({
      initialPanel: "heading1",
      duration: 700,
    });

  const panels = {
    heading1: <Heading1 changePanel={changePanel} />,
    heading2: <Heading2 changePanel={changePanel} />,
    heading3: <Heading3 changePanel={changePanel} />,
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-[500px] rounded-xl bg-white p-8 shadow-lg">
        <div
          className={`transition-opacity duration-700 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {panels[currentPanel]}
        </div>

        {isTransitioning && (
          <p className="mt-6 text-sm text-gray-400">Transitioning...</p>
        )}
      </div>
    </div>
  );
}
