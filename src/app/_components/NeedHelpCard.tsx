export const NeedHelpCard = ({ paragraph, title }) => {
  return (
    <div className="w-[300px] h-[150px]  border-[2px] rounded-xl flex flex-col justify-center p-4">
      <img src="./next.svg" className="w-20 h-20" />
      <p className="text-white text-[23px]">{title}</p>
      <p className="text-gray-400 text-[10px]">{paragraph}</p>
    </div>
  );
};
