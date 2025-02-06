export const Header = () => {
  return (
    <div className="w-full bg-[#3e5063] h-[70px] rounded-xl p-3 flex justify-between">
      <div className="flex gap-12 items-center justify-center">
        <img
          src="https://www.mobicom.mn/_next/image?url=https%3A%2F%2Fosa.mobicom.mn%2Fcontent%2Fmcommerce%2Fuploads%2Fmobicom-logo-hq.png&w=256&q=75"
          alt=""
          className="w-18 h-8 ml-6"
        />
        <div className="flex bg-gray-500 rounded-full p-4 h-[40px] justify-center items-center gap-2">
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            className="outline-none bg-transparent"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex gap-7 mr-10 ml-[-90px] items-center justify-center">
        <button className="flex gap-2">
          <p>Үйлчилгээ</p>
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
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        <button>Мэдээлэл</button>
        <button>Дэлгүүр</button>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <div className="bg-gray-500 w-10 h-10 rounded-lg flex justify-center items-center ">
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
            <circle cx="12" cy="12" r="4" />
            <path d="M12 3v1" />
            <path d="M12 20v1" />
            <path d="M3 12h1" />
            <path d="M20 12h1" />
            <path d="m18.364 5.636-.707.707" />
            <path d="m6.343 17.657-.707.707" />
            <path d="m5.636 5.636.707.707" />
            <path d="m17.657 17.657.707.707" />
          </svg>
        </div>
        <div className="bg-gray-500 w-10 h-10 rounded-lg flex justify-center items-center ">
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
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
        </div>
        <div className="bg-gray-500 w-10 h-10 rounded-lg flex justify-center items-center ">
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
            <path d="m19 11-4-7" />
            <path d="M2 11h20" />
            <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
            <path d="m5 11 4-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};
