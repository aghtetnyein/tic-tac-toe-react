import { Fragment, useReducer } from "react";

// reducers
import { INITIAL_STATE, modalReducer } from "../modalReducer";

// components
import Cross from "./Cross";
import Circle from "./Circle";
import FinishModal from "./FinishModal";

interface IPlayProps {
  gameProgressItems: (string | null)[];
  handleQuit: () => void;
  handleNextRound: () => void;
}

interface IPlayBoxProps {
  item: string | null;
}

const restartIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
    />
  </svg>
);

const exitIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="2.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
    />
  </svg>
);

const PlayBox = ({ item }: IPlayBoxProps) => {
  return (
    <div className="w-[6.5rem] h-[5rem] md:w-[8rem] md:h-[6.5rem] bg-thinDark rounded-md flex items-center justify-center cursor-pointer">
      {item === "cross" && <Cross inPlay={true} />}
      {item === "circle" && <Circle inPlay={true} />}
    </div>
  );
};

const Play = ({
  gameProgressItems,
  handleQuit,
  handleNextRound,
}: IPlayProps) => {
  // reducers
  const [modalState, modalDispatch] = useReducer(modalReducer, INITIAL_STATE);

  const modalClose = () => {
    modalDispatch({
      type: "CLOSE_MODAL",
      payload: {
        isWon: null,
        winnerPick: null,
        title: "",
      },
    });
  };

  const handleRestart = () => {
    modalDispatch({
      type: "OPEN_MODAL",
      payload: {
        isWon: null,
        winnerPick: null,
        title: "Choose quit (new mode) or next round",
      },
    });
  };

  const handleExit = () => {
    modalDispatch({
      type: "OPEN_MODAL",
      payload: {
        isWon: true,
        winnerPick: "circle",
        title: "Takes this round!",
      },
    });
  };

  return (
    <Fragment>
      <div className="flex flex-col gap-8 items-center justify-center">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Cross />
            <Circle />
          </div>
          <div className="bg-thinDark flex items-center gap-3 py-2 px-4 rounded-md">
            <Cross color="bg-gray-300" />
            <p className="text-[1rem] text-gray-300 font-bold">Turn</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="bg-gray-300 hover:bg-gray-400 p-2 rounded-md text-thinDark"
              onClick={handleRestart}
            >
              {restartIcon}
            </button>

            <button
              className="bg-red hover:bg-hoverRed p-2 rounded-md text-gray-200 hover:text-white"
              onClick={handleExit}
            >
              {exitIcon}
            </button>
          </div>
        </div>

        <div className="w-full grid grid-cols-3 gap-4">
          {gameProgressItems.map((item, index) => (
            <Fragment key={index}>
              <PlayBox item={item} />
            </Fragment>
          ))}
        </div>

        <div className="w-full grid grid-cols-3 gap-4">
          <div className="w-[6.5rem] md:w-[8rem] h-full bg-blue rounded-md px-4 py-3 text-center">
            <p className="text-[0.8rem] font-bold">X (you)</p>
            <p className="text-[1.2rem] font-black">14</p>
          </div>
          <div className="w-[6.5rem] md:w-[8rem] h-full bg-gray-300 rounded-md px-4 py-3 text-center">
            <p className="text-[0.8rem] font-bold">Ties</p>
            <p className="text-[1.2rem] font-black">32</p>
          </div>
          <div className="w-[6.5rem] md:w-[8rem] h-full bg-yellow rounded-md px-4 py-3 text-center">
            <p className="text-[0.8rem] font-bold">O (cpu)</p>
            <p className="text-[1.2rem] font-black">10</p>
          </div>
        </div>
      </div>

      {modalState.isOpen && (
        <FinishModal
          isWon={modalState.isWon}
          winnerPick={modalState.winnerPick}
          title={modalState.title}
          handleQuit={() => {
            modalClose();
            handleQuit();
          }}
          handleNextRound={() => {
            modalClose();
            handleNextRound();
          }}
        />
      )}
    </Fragment>
  );
};

export default Play;
