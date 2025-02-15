import { AppsCard } from "./AppsCard";

export const Apps = () => {
  return (
    <div className=" h-[1000px] text-white mt-20 flex flex-col items-center gap-6 p-8 rounded-xl">
      <p className="text-[50px]">Хэрэглээг хялбарчлах апликейшнууд</p>
      <div className="flex gap-[450px] mt-40 relative">
        <div className="flex flex-col gap-8">
          <AppsCard />
          <AppsCard />
        </div>
        <div className="absolute w-[450px] border-gray-600 h-[1px] left-[31%] top-[25%] border-dashed border-[1px]"></div>
        <div className="absolute w-[450px] border-gray-600 h-[1px] left-[31%] top-[75%] border-dashed border-[1px]"></div>
        <div className="absolute h-[650px] border-gray-600 w-[1px] left-[50%] top-[-25%] border-dashed border-[1px]"></div>
        <div className="flex flex-col gap-8">
          <AppsCard />
          <AppsCard />
        </div>
      </div>
    </div>
  );
};
