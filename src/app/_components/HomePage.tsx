import { EasyGrid } from "./EasyGrid";
import { Header } from "./Header";
import { NeedHelp } from "./NeedHelp";
import { OnlineShop } from "./OnlineShop";
import { Special } from "./Special";

export const HomePage = () => {
  return (
    <div className=" rounded-lg  h-full p-2 flex flex-col gap-6  ">
      <Header />
      <EasyGrid />
      <Special />
      <OnlineShop />
      <NeedHelp />
    </div>
  );
};
