// components
import Button from "./Button";
import Circle from "./Circle";
import Cross from "./Cross";

interface IFinishModalProps {
  isWon: boolean | null;
  winnerPick: "cross" | "circle" | null;
  title: string;
  handleQuit: () => void;
  handleNextRound: () => void;
}

const FinishModal = ({
  isWon,
  winnerPick,
  title,
  handleQuit,
  handleNextRound,
}: IFinishModalProps) => {
  return (
    <div className="fixed w-screen h-screen bg-black/70 flex items-center justify-center p-2">
      <div className="max-w-[28rem] py-6 px-12 bg-thinDark rounded-md text-center flex flex-col gap-8">
        {isWon && (
          <p className="text-[0.8rem] font-black text-gray-300 uppercase">
            {isWon ? "You won" : "You lost"}
          </p>
        )}
        {winnerPick ? (
          <div className="flex items-center justify-center gap-4">
            {winnerPick === "cross" && <Cross color="bg-blue" />}
            {winnerPick === "circle" && <Circle color="border-yellow" />}
            <p
              className={`text-[1.5rem] font-black 
              ${winnerPick === "cross" && "text-blue"} 
              ${winnerPick === "circle" && "text-yellow"} 
              uppercase`}
            >
              {title}
            </p>
          </div>
        ) : (
          <p className="text-[1.5rem] font-black text-gray-300 uppercase">
            {title}
          </p>
        )}

        <div className="flex items-center justify-center gap-3">
          <Button
            label="Quit"
            bgColor="bg-gray-300"
            bgHoverColor="hover:bg-gray-400"
            onClick={handleQuit}
          />
          <Button
            label="Next round"
            bgColor="bg-yellow"
            bgHoverColor="hover:bg-hoverYellow"
            onClick={handleNextRound}
          />
        </div>
      </div>
    </div>
  );
};

export default FinishModal;
