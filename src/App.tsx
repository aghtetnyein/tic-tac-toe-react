import { useState } from "react";

// components
import Pick from "./components/Pick";
import Play from "./components/Play";

let temp = Array(9).fill(null as string | null);
temp[0] = "cross";
temp[1] = "circle";
temp[2] = "cross";
temp[3] = "cross";

const App = () => {
  const [game, setGame] = useState<"pick" | "play">("pick");
  const [gameProgressItems, setGameProgressItems] = useState<string[]>(temp);

  const handlePick = (pick: "cross" | "circle", mode: "pvp" | "pvc") => {
    setGame("play");
    console.log("you picked", pick, "and pick mode is", mode);
  };

  const handleQuit = () => {
    setGame("pick");
    setGameProgressItems(Array(9).fill(null as string | null));
  };

  const handleNextRound = () => {
    setGameProgressItems(Array(9).fill(null as string | null));
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-dark">
      {game === "pick" && <Pick handlePick={handlePick} />}
      {game === "play" && (
        <Play
          gameProgressItems={gameProgressItems}
          handleQuit={handleQuit}
          handleNextRound={handleNextRound}
        />
      )}
    </div>
  );
};

export default App;
