import { Button } from "@nextui-org/react";

type HeaderProps = {
  resetGame: () => void;
  hasWon: boolean;
};

/**
 * This component contains the title and the buttons (new game and reset)
 * @param HeaderProps
 * @returns Header
 */

const Header = ({ resetGame, hasWon }: HeaderProps) => {
  const winnerMsg = hasWon ? "You Win!" : "";
  // buttons have handlers from the props attached to onclick event to trigger state change in parent component.
  return (
    <div className="flex justify-between align-center mb-4 p-2 dark:bg-zinc-800 bg-zinc-200">
      <div className="flex  flex-col md:flex-row justify-between">
        <h1 className="m-0 text-base md:text-2xl text-nowrap">
          Memory Card Game
        </h1>
        <h2 className="flex md:hidden">{winnerMsg}</h2>
      </div>
      <div className="hidden md:flex">
        <h2>{winnerMsg}</h2>
      </div>
      <Button onClick={resetGame}>RESET</Button>
    </div>
  );
};

export default Header;
