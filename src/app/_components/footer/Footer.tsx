import { AboutUs } from "./AboutUs";
import { Connection } from "./Connection";
import { FooterBottom } from "./FooterBottom";
import { HelpYou } from "./HelpYou";
import { JoinUs } from "./JoinUs";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="flex bg-gray-700 flex-col gap-6 p-10 w-full h-[600px] rounded-xl">
      <div className="flex gap-6 h-[85%] justify-center">
        <AboutUs />
        <HelpYou />
        <Connection />
        <JoinUs />
      </div>
      <div className="w-full h-[1px] bg-gray-900"></div>
      <FooterBottom />
    </div>
  );
};
