interface IStateProps {
  isOpen: boolean;
  isWon: boolean | null;
  winnerPick: "circle" | "cross" | null;
  title: string;
}

interface IActionProps {
  type: string;
  payload: {
    isWon: boolean | null;
    winnerPick: "circle" | "cross" | null;
    title: string;
  };
}

const INITIAL_STATE = {
  isOpen: false,
  isWon: null,
  winnerPick: null,
  title: "",
};

const modalReducer = (state: IStateProps, action: IActionProps) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        isOpen: true,
        isWon: action.payload.isWon,
        winnerPick: action.payload.winnerPick,
        title: action.payload.title,
      };
    case "CLOSE_MODAL":
      return {
        ...INITIAL_STATE,
      };
    default:
      return {
        ...INITIAL_STATE,
      };
  }
};

export { INITIAL_STATE, modalReducer };
