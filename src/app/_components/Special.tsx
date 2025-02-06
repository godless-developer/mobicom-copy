export const Special = () => {
  return (
    <div className="w-full h-[1000px] relative ">
      <div className="absolute top-0 w-full h-[600px] bg-[url(https://osa.mobicom.mn/content/mcommerce/uploads/specialOfferBG.png)] z-10 bg-cover py-32 left-0 flex flex-col items-center justify-start gap-10 rounded-2xl">
        <p className="text-[40px] font-bold font-[Inter] normal">
          Онцгой саналууд
        </p>
        <div className="flex justify-center items-center gap-8">
          <div className="p-3 flex gap-4 rounded-2xl bg-black opacity-35">
            <button className="bg-[#3e5063] p-2">Бүгд</button>
            <button>Урамшуулал</button>
            <button>Бүртгэл</button>
            <button>Мэдээлэл</button>
            <button>Мэдэгдэл</button>
            <button>Зөвлөмж</button>
          </div>
          <button className="flex gap-2 justify-center items-center">
            <p>Дэлгэрэнгүй</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="absolute top-[400px] w-full h-[500px] z-50  left-10">
        ehve
      </div>
    </div>
  );
};
