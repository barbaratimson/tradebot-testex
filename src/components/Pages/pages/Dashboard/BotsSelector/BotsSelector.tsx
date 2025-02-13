import "./BotsSelector.scss"
import {BotT} from "../../../../../utils/types.ts";
import {useAppSelector} from "../../../../../store/store.ts";

interface BotsSelectorProps {
    bots: BotT[6]

}

export const BotsSelector = ({bots}:BotsSelectorProps) => {
    const selectedTimeRange = useAppSelector(state => state.timeRange.selectedTimeRange)
    return (
        <div className="bots-selector">
            {bots && bots.length !== 0 ? bots.map((bot:BotT) => (
                <div className="bot-button">
                    <div className="bot-icon"><img src={`src/assets/bots/${bot.name}.png`} alt="Bot icon"/></div>
                    <div className="bot-title">ATTACK</div>
                    <div className={`bot-percent ${bot[selectedTimeRange] ==0 ? "" : bot[selectedTimeRange] > 0 ? "percent-green"  : "percent-red"}`}>{bot[selectedTimeRange] + "%"}</div>
                </div>
            )) : null}
        </div>
    );
};