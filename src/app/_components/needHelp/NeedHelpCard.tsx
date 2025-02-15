interface NeedHelpCardProps {
  paragraph: string;
  title: string;
  imgUrl: string;
}
export const NeedHelpCard: React.FC<NeedHelpCardProps> = ({
  paragraph,
  title,
  imgUrl,
}) => {
  return (
    <div className="w-[370px] h-[200px] gap-3 border-[0.5px] rounded-xl flex flex-col justify-center p-4 hover:border-red-700 hover:bg-gray-800 cursor-pointer ">
      <div className="w-16 h-16 ml-3 size-18 rounded-full flex justify-center items-center bg-pink-200 border-pink-500 border-[1px]">
        <img src={imgUrl} className="w-8 h-8" />
      </div>
      <p className="text-white font-medium text-[22px]">{title}</p>
      <p className="text-gray-400 text-[11px]">{paragraph}</p>
    </div>
  );
};
