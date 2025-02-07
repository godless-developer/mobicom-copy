import { CarouselDemo } from "./CarouselDemo";

export const OnlineShop = () => {
  return (
    <div className="w-full h-[1000px] rounded-xl p-6 bg-[#3e5063] flex flex-col items-center gap-10">
      <h1 className="text-[45px]">Онлайн дэлгүүр</h1>
      <div className="flex gap-9 ">
        <div className="flex bg-[#222c36] p-3 rounded-md gap-2">
          <button className="focus:bg-white focus:text-black hover:bg-white text-white duration-200 ease-in-out px-3 py-1 rounded-md">
            Гар утас
          </button>
          <button className="focus:bg-white focus:text-black hover:bg-white text-white duration-200 ease-in-out  px-3 py-1 rounded-md">
            Дагалдах хэрэгсэл
          </button>
        </div>
        <button className="flex justify-center items-center">
          <p>Бүгдийг харах</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
      <CarouselDemo />
    </div>
  );
};
