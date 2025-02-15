const GridsDatas = [
  {
    imgUrl: "https://osa.mobicom.mn/content/mcommerce/uploads/icons/phone.svg",
    title: "Нэгж авах",
  },
  {
    imgUrl: "https://osa.mobicom.mn/content/mcommerce/uploads/icons/Data.svg",
    title: "Дата авах",
  },
  {
    imgUrl:
      "https://osa.mobicom.mn/content/mcommerce/uploads/icons/simRecover.svg",
    title: "Сим сэргээх",
  },
  {
    imgUrl:
      "https://osa.mobicom.mn/content/mcommerce/uploads/icons/wallet-plus.svg",
    title: "Төлбөр төлөх",
  },
  {
    imgUrl: "https://osa.mobicom.mn/content/mcommerce/uploads/icons/Data.svg",
    title: "Wifi карт",
  },
  {
    imgUrl:
      "https://osa.mobicom.mn/content/mcommerce/uploads/icons/memory-card.svg",
    title: "Шинэ дугаар",
  },
];

export const EasyGrid = () => {
  return (
    <div
      className="w-full h-[830px] rounded-xl overflow-hidden"
      style={{
        background: `url("https://osa.mobicom.mn/content/mcommerce/uploads/DJI_20231028181037_0240_D_MAX_Recovered_ezgif_com_jpg_to_webp_converter_d02db53f44.webp")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-[37%] h-[60%] backdrop-blur-lg mt-[10%] ml-[50%] rounded-xl p-3 ">
        <div className="flex flex-col gap-4 h-full  rounded-lg">
          <div className="bg-[#3e5063] h-[60px] p-2 rounded-lg">
            <div className="bg-background h-full rounded-lg flex justify-center items-center">
              <p>Хялбар үйлчилгээ</p>
            </div>
          </div>
          <div className="bg-[#3e5063] p-2 flex flex-wrap gap-3 rounded-lg h-full justify-center ">
            {GridsDatas.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-[205px] flex flex-col gap-2 justify-center items-center rounded-lg duration-500 ease-in-out hover:bg-gray-700 hover:border-gray-600 hover:border-[2px] cursor-pointer"
                >
                  <div className="w-[65px] h-[65px] bg-white border-[1px] border-pink-400 rounded-full flex justify-center items-center">
                    <img src={item.imgUrl} alt="" />
                  </div>
                  <div className=" cursor-pointer flex gap-2 justify-center items-center">
                    <p>{item.title}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
