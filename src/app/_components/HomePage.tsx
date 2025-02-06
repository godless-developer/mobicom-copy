import { EasyGrid } from "./EasyGrid";
import { Header } from "./Header";
import { Special } from "./Special";

export const HomePage = () => {
  return (
    <div className=" rounded-lg w-[100%] h-full p-3 flex flex-col gap-6">
      <Header />
      <EasyGrid />
      <Special />
      <div className="w-full z-30 bg-red-600 h-[500px]">hjk</div>
    </div>
  );
};
