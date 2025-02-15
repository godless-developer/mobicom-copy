import { url } from "inspector";

export const ThreeNews = () => {
  return (
    <div className="bg-[#2e3b4a] text-white w-full h-[800px] rounded-xl flex flex-col justify-center items-center p-20 gap-20 ">
      <p className="text-[40px] font-sans font-bold">
        Мобиком групп тогтвортой хөгжлийн төлөө
      </p>
      <div className="h-[430px] w-[1220px] flex justify-center items-center gap-10 rounded-xl">
        <div
          className=" w-[400px] h-[430px] rounded-xl flex flex-col justify-end items-start gap-3 p-5 relative overflow-hidden duration-300 ease-in-out hover:scale-x-125 hover:scale-y-105"
          style={{
            background: `url("https://osa.mobicom.mn/content/mcommerce/uploads/SDG_Undsen_chiglel_86da118242.webp")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <p className="text-[22px] z-10">Үндсэн чиглэл</p>
          <div className="bg-gray-700 w-full h-[1px]"></div>
        </div>
        <div
          className="w-[400px] h-[430px] rounded-xl flex flex-col justify-end items-start gap-3 p-5 relative overflow-hidden duration-300 ease-in-out hover:scale-x-125 hover:scale-y-105"
          style={{
            background: `url("https://osa.mobicom.mn/content/mcommerce/uploads/SDG_Tusul_hutulbur_643351fc20.webp")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <p className="text-[22px] z-10 ">Хэрэгжүүлсэн төсөл, хөтөлбөрүүд</p>
          <div className="bg-gray-700 w-full h-[1px]"></div>
        </div>
        <div
          className="w-[400px] h-[430px] rounded-xl flex flex-col justify-end items-start gap-3 p-5 relative overflow-hidden duration-300 ease-in-out hover:scale-x-125 hover:scale-y-100"
          style={{
            background: `url("https://osa.mobicom.mn/content/mcommerce/uploads/SDG_Tailan_1db6ec10f5.webp")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <p className="text-[22px] z-10 ">Тогтвортой хөгжлийн тайлан</p>
          <div className="bg-gray-700 w-full h-[1px]"></div>
        </div>
      </div>
    </div>
  );
};
