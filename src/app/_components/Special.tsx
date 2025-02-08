import SpecialCard from "./SpecialCard";

export const Special = () => {
  return (
    <div className="w-full h-[1000px] relative ">
      <div className="absolute top-0 w-full h-[700px] bg-[url(https://osa.mobicom.mn/content/mcommerce/uploads/specialOfferBG.png)] z-10 bg-cover py-32 left-0 flex flex-col items-center justify-start gap-10 rounded-2xl">
        <p className="text-[40px] font-bold font-[Inter] normal">
          Онцгой саналууд
        </p>
        <div className="flex justify-center items-center gap-8">
          <div className="p-3 flex gap-4 rounded-2xl bg-black opacity-35 text-white">
            <button className="focus:bg-[#3e5063] focus:text-white rounded-lg px-4 py-1">
              Бүгд
            </button>
            <button className="focus:bg-[#3e5063] rounded-lg px-4 py-1">
              Урамшуулал
            </button>
            <button className="focus:bg-[#3e5063] rounded-lg px-4 py-1">
              Бүртгэл
            </button>
            <button className="focus:bg-[#3e5063] rounded-lg px-4 py-1">
              Мэдээлэл
            </button>
            <button className="focus:bg-[#3e5063] rounded-lg px-4 py-1">
              Мэдэгдэл
            </button>
            <button className="focus:bg-[#3e5063] rounded-lg px-4 py-1">
              Зөвлөмж
            </button>
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
      <div className="absolute overflow-x-auto scroll-smooth scrollbar-hide top-[300px] w-full h-[530px] flex justify-start items-center z-50  left-10 ">
        <div className="flex gap-10 ml-20 ">
          <SpecialCard
            background="https://osa.mobicom.mn/content/mcommerce/uploads/Mobicom_news_1_300x_7b4f719907.webp"
            paragraph="Samsung Galaxy S25 , S25+ , S25 Ultra гар утаснуудын урьдчилсан захайлга
        эхэллээ"
            imgUrl="https://osa.mobicom.mn/content/mcommerce/uploads/icons/newspaper.svg"
          />
          <SpecialCard
            background="https://osa.mobicom.mn/content/mcommerce/uploads/medee_tses_1_90c9d1dbe7.webp"
            paragraph="Манай Интернэт илүү хурдан боллоо"
            imgUrl="https://osa.mobicom.mn/content/mcommerce/uploads/icons/newspaper.svg"
          />
          <SpecialCard
            background="https://www.mobicom.mn/_next/image?url=https%3A%2F%2Fosa.mobicom.mn%2Fcontent%2Fmcommerce%2Fuploads%2F1_423c618ef0.webp&w=2048&q=75"
            paragraph="ДАТА БАГЦУУД ШИНЭЧЛЭГДЛЭЭ"
            imgUrl="https://osa.mobicom.mn/content/mcommerce/uploads/icons/newspaper.svg"
          />
          <SpecialCard
            background="https://osa.mobicom.mn/content/mcommerce/uploads/7_6d70285aad.webp"
            paragraph="АЗЫН 25: Цэнэглээд LandCruiser 300-тай "
            imgUrl="https://osa.mobicom.mn/content/mcommerce/uploads/icons/star.svg"
          />
          <SpecialCard
            background="https://osa.mobicom.mn/content/mcommerce/uploads/1080_720_0a58c6aea2.webp"
            paragraph="Дата роуминг ашигладаг хэрэглэгчдийн анхааралд"
            imgUrl="https://osa.mobicom.mn/content/mcommerce/uploads/icons/bulb.svg"
          />
          <SpecialCard
            background="https://osa.mobicom.mn/content/mcommerce/uploads/tses_1_9dd9898473.webp"
            paragraph="Мобиком групп хүлэмжийн хийн ялгарлыг бууруулахад хувь нэмрээ оруулж байна"
            imgUrl="https://osa.mobicom.mn/content/mcommerce/uploads/icons/bulb.svg"
          />
          <SpecialCard
            background="https://osa.mobicom.mn/content/mcommerce/uploads/tses_1_273e5da0ac.webp"
            paragraph="7 улсын хэлийг 6000 төгрөгөөр сурмаар байна уу?"
            imgUrl="https://osa.mobicom.mn/content/mcommerce/uploads/icons/newspaper.svg"
          />
          <SpecialCard
            background="https://osa.mobicom.mn/content/mcommerce/uploads/medee_721x1081_fdeb8621a3.webp"
            paragraph="СЭГСРЭЭД АВ"
            imgUrl="https://osa.mobicom.mn/content/mcommerce/uploads/icons/star.svg"
          />
          <SpecialCard
            background="https://osa.mobicom.mn/content/mcommerce/uploads/1080_720_0a58c6aea2.webp"
            paragraph="WE ҮЙЛЧИЛГЭЭНИЙ ХЭРЭГЛЭГЧДИЙН АНХААРАЛД"
            imgUrl="https://osa.mobicom.mn/content/mcommerce/uploads/icons/bulb.svg"
          />
          <SpecialCard
            background="https://osa.mobicom.mn/content/mcommerce/uploads/1080_720_0a58c6aea2.webp"
            paragraph="ММАНАЙ ИНТЕРНЭТ ХЭРЭГЛЭГЧДИЙН АНХААРАЛД"
            imgUrl="https://osa.mobicom.mn/content/mcommerce/uploads/icons/bulb.svg"
          />
        </div>
      </div>
    </div>
  );
};
