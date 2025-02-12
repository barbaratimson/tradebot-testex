import "./BotsSelector.scss"
import {BotT} from "../../../../../utils/types.ts";

interface BotsSelectorProps {
    bots: BotT[6]
}
export const BotsSelector = ({bots}:BotsSelectorProps) => {
    return (
        <div className="bots-selector">
            {bots && bots.length !== 0 ? bots.map((bot:BotT) => (
                <div className="bot-button">
                    <div className="bot-icon"><img src={`src/assets/bots/${bot.name}.png`} alt="Bot icon"/></div>
                    <div className="bot-title">ATTACK</div>
                    <div className={`bot-percent ${bot["7d"] ==0 ? "" : bot["7d"] > 0 ? "percent-green"  : "percent-red"}`}>{bot["7d"] + "%"}</div>
                </div>
            )) : null}
        </div>
    );
};