import "./Game.css";
import CustomerArea from "../components/CustomerArea";
import PlayerArea from "../components/PlayerArea";
export default function Game() {
  return (
    <>
      <div className="container">
        <CustomerArea />
        <PlayerArea />
      </div>
    </>
  );
}
