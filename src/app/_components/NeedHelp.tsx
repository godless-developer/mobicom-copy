import { NeedHelpCard } from "./NeedHelpCard";

export const NeedHelp = () => {
  return (
    <div className="w-full h-[800px] p-4 flex">
      <div className="w-[50%] flex justify-center items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-[30px] text-white">Танд тусламж хэрэгтэй юу?</h1>
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
      <div className="w-[50%]">
        <div></div>
        <div className="flex justify-center items-center w-full h-full">
          <div className="gap-6 flex flex-wrap justify-center">
            <NeedHelpCard
              title="Нэгжийн төрөл"
              paragraph="Та дараах цэнэглэгч картуудаас сонгон цэнэглэлт хийх боломжтой"
            />
            <NeedHelpCard
              title="Дата багцын төрөл"
              paragraph="Та доорх багцуудаас сонголтоо хийгээрэй"
            />
            <NeedHelpCard
              title="Салбарын байршил"
              paragraph="Улаанбаатар болон орон нутгийн салбарын байршлуудыг харах"
            />
            <NeedHelpCard
              title="ПУК код авах"
              paragraph="Та сим картынхаа ПУК кодыг мартсан бол дараах зааврын дагуу ПУК кодоо авах боломжтой"
            />
            <NeedHelpCard
              title="Баталгаат засварын үйлчилгээ"
              paragraph="fgАлбан ёсны баталгаат засварын үйлчилгээний талаарх мэдээллийг эндээс аваарайhj"
            />
            <NeedHelpCard
              title="НӨАТ-ын баримт авах"
              paragraph="Та төлбөрөө дараах сувгуудаас сонгон төлж үнэт цаг хэмнээрэй."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
