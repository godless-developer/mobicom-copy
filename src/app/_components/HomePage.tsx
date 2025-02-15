import { Apps } from "./cApps/apps";
import { EasyGrid } from "./EasyGrid";
import { Footer } from "./footer/Footer";
import { Header } from "./Header";
import { NeedHelp } from "./needHelp/NeedHelp";
import { OnlineShop } from "./OnlineShop";
import { Special } from "./special/Special";
import { ThreeNews } from "./ThreeNews";

export const HomePage = () => {
  return (
    <div className="mt-20 rounded-lg  h-full p-2 flex flex-col gap-6  ">
      <EasyGrid />
      <Special />
      <OnlineShop />
      <NeedHelp />
      <ThreeNews />
      <Apps />
      <Footer />
    </div>
  );
};
