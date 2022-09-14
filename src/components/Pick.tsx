import { useState } from "react";

// components
import Cross from "./Cross";
import Circle from "./Circle";
import Button from "./Button";

interface IPickProps {
  handlePick: (pick: "cross" | "circle", mode: "pvp" | "pvc") => void;
}

const Pick = ({ handlePick }: IPickProps) => {
  const [pick, setPick] = useState<"cross" | "circle">("cross");

  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div className="flex items-center gap-2">
        <Cross />
        <Circle />
      </div>
      <div className="w-full p-4 rounded-md bg-gray-700">
        <p className="text-[0.8rem] font-bold uppercase text-white text-center">
          Pick player 1's mark
        </p>
        <div className="my-3 w-full p-[0.5rem] bg-dark rounded-md flex items-center">
          <div
            className={`w-36 sm:w-44 p-2 rounded-md ${
              pick === "cross" ? "bg-gray-300" : "bg-transparent"
            } flex items-center justify-center cursor-pointer`}
            onClick={() => setPick("cross")}
          >
            <Cross color={pick === "cross" ? "bg-dark" : "bg-gray-300"} />
          </div>
          <div
            className={`w-36 sm:w-44 p-2 rounded-md ${
              pick === "circle" ? "bg-gray-300" : "bg-transparent"
            } flex items-center justify-center cursor-pointer`}
            onClick={() => setPick("circle")}
          >
            <Circle
              color={pick === "circle" ? "border-dark" : "border-gray-300"}
            />
          </div>
        </div>
        <p className="text-[0.8rem] font-bold uppercase text-gray-300 text-center">
          Remember: X Goes First
        </p>
      </div>
      <div className="w-full flex flex-col gap-3">
        <Button
          label="New game (vs cpu)"
          bgColor="bg-yellow"
          bgHoverColor="hover:bg-hoverYellow"
          onClick={() => handlePick(pick, "pvc")}
        />
        <Button
          label="New game (vs player)"
          bgColor="bg-blue"
          bgHoverColor="hover:bg-hoverBlue"
          onClick={() => handlePick(pick, "pvp")}
        />
      </div>
    </div>
  );
};

export default Pick;
