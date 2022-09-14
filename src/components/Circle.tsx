interface ICircleProps {
  color?: string;
  inPlay?: boolean;
}

const Circle = ({ color, inPlay }: ICircleProps) => {
  return (
    <div
      className={`relative 
      ${inPlay ? "w-12 h-12 md:w-16 md:h-16" : "w-6 h-6 md:w-8 md:h-8"} 
      rounded-full 
      ${
        inPlay
          ? "border-[0.5rem] md:border-[0.9rem]"
          : "border-[0.35rem] md:border-[0.5rem]"
      } 
      ${color ? color : "border-yellow"}`}
    ></div>
  );
};

export default Circle;
