interface SpecialCardProps {
  imgUrl: string;
  background: string;
  paragraph: string;
}

export const SpecialCard: React.FC<SpecialCardProps> = ({
  imgUrl,
  background,
  paragraph,
}) => {
  return (
    <div
      className=" bg-cover bg-left-top w-[325px] relative rounded-2xl p-6 h-[500px] shadow-[inset_0px_-50px_55px_13px_#000] duration-300 ease-in-out cursor-pointer hover:scale-110 hover:shadow-[inset_0px_-31px_100px_50px_#000]"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-11 h-11 absolute top-6 right-6 bg-gray-600 rounded-full flex justify-center items-center">
        <img src={imgUrl} alt="" />
      </div>
      <p className="absolute bottom-7 text-[20px] text-white">{paragraph}</p>
      <div className="w-[85%] absolute bottom-4 h-[1.5px] bg-gray-700"></div>
    </div>
  );
};
