import { NeedHelpCard } from "./NeedHelpCard";

export const NeedHelp = () => {
  return (
    <div className="w-full h-[800px] p-4 flex">
      <div className="w-[50%] flex justify-center items-center">
        <div className="flex flex-col gap-6 w-[400px]">
          <h1 className="text-[50px] text-white font-extrabold font-sans">
            Танд тусламж хэрэгтэй юу?
          </h1>
          <div className="border-[2px] border-black w-[400px] h-[120px] rounded-xl justify-start p-2 flex flex-col items-center gap-3">
            <p className="bg-red-800 text-white py-4 px-[124px] rounded-xl">
              AI бот-оос асууя?
            </p>
            <img
              src="https://www.mobicom.mn/icons/gpt.svg"
              alt=""
              className="w-[140px]"
            />
          </div>
        </div>
      </div>
      <div className="w-[60%]">
        <div></div>
        <div className="flex justify-center items-center w-full h-full">
          <div className="gap-20 flex flex-wrap justify-center">
            <div className="flex flex-col gap-6 mt-20">
              <NeedHelpCard
                imgUrl="https://www.mobicom.mn/_next/image?url=https%3A%2F%2Fosa.mobicom.mn%2Fcontent%2Fmcommerce%2Fuploads%2FBagcz_solih_ffad1ee3a8.webp&w=32&q=75"
                title="Нэгжийн төрөл"
                paragraph="Та дараах цэнэглэгч картуудаас сонгон цэнэглэлт хийх боломжтой"
              />
              <NeedHelpCard
                imgUrl="https://www.mobicom.mn/_next/image?url=https%3A%2F%2Fosa.mobicom.mn%2Fcontent%2Fmcommerce%2Fuploads%2Fimage_11_ec72dac304.png&w=32&q=75"
                title="Салбарын байршил"
                paragraph="Улаанбаатар болон орон нутгийн салбарын байршлуудыг харах"
              />
              <NeedHelpCard
                imgUrl="https://www.mobicom.mn/_next/image?url=https%3A%2F%2Fosa.mobicom.mn%2Fcontent%2Fmcommerce%2Fuploads%2FPUK_kod_avah_e920beb20d.webp&w=32&q=75"
                title="Баталгаат засварын үйлчилгээ"
                paragraph="Албан ёсны баталгаат засварын үйлчилгээний талаарх мэдээллийг эндээс аваарай"
              />
            </div>
            <div className="flex flex-col gap-6 ">
              <NeedHelpCard
                imgUrl="https://www.mobicom.mn/_next/image?url=https%3A%2F%2Fosa.mobicom.mn%2Fcontent%2Fmcommerce%2Fuploads%2Fpin_3_350f9a350a.png&w=32&q=75"
                title="Дата багцын төрөл"
                paragraph="Та доорх багцуудаас сонголтоо хийгээрэй"
              />
              <NeedHelpCard
                imgUrl="https://www.mobicom.mn/_next/image?url=https%3A%2F%2Fosa.mobicom.mn%2Fcontent%2Fmcommerce%2Fuploads%2FGroup_230_f8580cbe2e.png&w=32&q=75"
                title="ПУК код авах"
                paragraph="Та сим картынхаа ПУК кодыг мартсан бол дараах зааврын дагуу ПУК кодоо авах боломжтой"
              />
              <NeedHelpCard
                imgUrl="https://www.mobicom.mn/_next/image?url=https%3A%2F%2Fosa.mobicom.mn%2Fcontent%2Fmcommerce%2Fuploads%2FN_AT_yn_barimt_avah_91e15e8845.webp&w=32&q=75"
                title="НӨАТ-ын баримт авах"
                paragraph="Та төлбөрөө дараах сувгуудаас сонгон төлж үнэт цаг хэмнээрэй."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
