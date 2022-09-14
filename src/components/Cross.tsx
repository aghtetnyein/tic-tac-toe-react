interface ICrossProps {
  color?: string;
  inPlay?: boolean;
}

const Cross = ({ color, inPlay }: ICrossProps) => {
  return (
    <div
      className={`relative 
      ${inPlay ? "w-20 h-20" : "w-8 h-8"} flex items-center justify-center`}
    >
      <div
        className={`absolute 
        ${
          inPlay
            ? "w-[0.7rem] h-[3rem] md:w-[1rem] md:h-[4.4rem]"
            : "w-[0.3rem] h-[1.5rem] md:w-[0.5rem] md:h-[2.2rem]"
        } 
        ${color ? color : "bg-blue"} rotate-45`}
      ></div>
      <div
        className={`absolute 
        ${
          inPlay
            ? "w-[0.7rem] h-[3rem] md:w-[1rem] md:h-[4.4rem]"
            : "w-[0.3rem] h-[1.5rem] md:w-[0.5rem] md:h-[2.2rem]"
        } 
        ${color ? color : "bg-blue"} -rotate-45`}
      ></div>
    </div>
  );
};

export default Cross;
