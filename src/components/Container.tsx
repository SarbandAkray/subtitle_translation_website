import { TContainer } from "../lib/types";

// children mean other content in the page
export default function Container({ children }: TContainer) {
  return (
    <div
      dir="rtl"
      className="bg-gray-800 max-w-[1920px] mx-auto text-white mb-20"
    >
      {children}
    </div>
  );
}
