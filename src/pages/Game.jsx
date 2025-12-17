import "./Game.css";
import CustomerArea from "../components/CustomerArea";
import PlayerArea from "../components/PlayerArea";
export default function Game() {
  return (
    <>
      <div className="flex flex-col h-full">
        <CustomerArea />
        <PlayerArea />
      </div>
    </>
  );
}
