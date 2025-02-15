export const JoinUs = () => {
  return (
    <div className=" flex flex-col gap-3">
      <div
        className="flex p-4 flex-col w-[650px] h-[44%] rounded-xl gap-4 items-start justify-center relative overflow-hidden"
        style={{
          background:
            'url("https://www.mobicom.mn/_next/image?url=https%3A%2F%2Fosa.mobicom.mn%2Fcontent%2Fmcommerce%2Fuploads%2Fimage_1103_1e55bb8d69.png&w=2048&q=75")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <h1 className="text-[26px] text-white font-semibold z-10">
          Бидэнтэй нэгдэх үү?
        </h1>
        <button className="px-3 flex gap-1 py-2 z-10 bg-red-500 text-white rounded-xl">
          <p>Үргэлжлүүлэх</p>
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
      <div className="flex justify-between">
        <div className="flex gap-3">
          <button>left</button>
          <button>right</button>
        </div>
        <div>.</div>
      </div>
    </div>
  );
};
