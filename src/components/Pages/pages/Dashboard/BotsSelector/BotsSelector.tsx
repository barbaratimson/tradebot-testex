import "./BotsSelector.scss"
import arrowImage1 from "../../../../../assets/arrows/arrow_1.png"
import arrowImage2 from "../../../../../assets/arrows/arrow_2.png"
import arrowImage3 from "../../../../../assets/arrows/arrow_3.png"
import arrowImage4 from "../../../../../assets/arrows/arrow_4.png"
import {BotT} from "../../../../../utils/types.ts";
import {useAppSelector} from "../../../../../store/store.ts";

interface BotsSelectorProps {
    bots: BotT[6]

}

export const BotsSelector = ({bots}: BotsSelectorProps) => {
    const selectedTimeRange = useAppSelector(state => state.timeRange.selectedTimeRange)
    return (
        <div className="bots-selector">
            <div className="bot-button">
                <div className="bot-icon"><img src={`src/assets/bots/${bots[5].name}.png`} alt="Bot icon"/></div>
                <div className="bot-title">ATTACK</div>
                <div
                    className={`bot-percent ${bots[5][selectedTimeRange] == 0 ? "" : bots[5][selectedTimeRange] > 0 ? "percent-green" : "percent-red"}`}>{bots[5][selectedTimeRange] + "%"}</div>
            </div>
            <div className="bot-button">
                <div className="bot-icon"><img src={`src/assets/bots/empty_slot.png`} alt="Bot icon"/></div>
                <div className="bot-title bot-empty">PLACE BOT<br/>HERE</div>
            </div>
            <div className="bot-button">
                <div className="bot-icon"><img src={`src/assets/bots/${bots[4].name}.png`} alt="Bot icon"/></div>
                <div className="bot-title">BALANCE</div>
                <div
                    className={`bot-percent ${bots[4][selectedTimeRange] == 0 ? "" : bots[4][selectedTimeRange] > 0 ? "percent-green" : "percent-red"}`}>{bots[4][selectedTimeRange] + "%"}</div>
            </div>
            <div className="bot-button">
                <div className="bot-icon"><img src={`src/assets/bots/${bots[2].name}.png`} alt="Bot icon"/></div>
                <div className="bot-title">DEFENCE</div>
                <div
                    className={`bot-percent ${bots[2][selectedTimeRange] == 0 ? "" : bots[2][selectedTimeRange] > 0 ? "percent-green" : "percent-red"}`}>{bots[2][selectedTimeRange] + "%"}</div>
            </div>
            <div className="bot-button">
                <div className="bot-icon"><img src={`src/assets/bots/${bots[0].name}.png`} alt="Bot icon"/></div>
                <div className="bot-title">MEGABOT</div>
                <div
                    className={`bot-percent ${bots[0][selectedTimeRange] == 0 ? "" : bots[0][selectedTimeRange] > 0 ? "percent-green" : "percent-red"}`}>{bots[0][selectedTimeRange] + "%"}</div>
            </div>
            <div className="bot-button">
                <div className="bot-icon"><img src={`src/assets/bots/${bots[3].name}.png`} alt="Bot icon"/></div>
                <div className="bot-title">ATTACK</div>
                <div
                    className={`bot-percent ${bots[3][selectedTimeRange] == 0 ? "" : bots[3][selectedTimeRange] > 0 ? "percent-green" : "percent-red"}`}>{bots[3][selectedTimeRange] + "%"}</div>
            </div>
            <div className="arrow-overlay">
                <div className="arrow-image" id="arrow1"><img src={arrowImage1} alt=""/></div>
                <div className="arrow-image" id="arrow2"><img src={arrowImage2} alt=""/></div>
                <div className="arrow-image" id="arrow3"><img src={arrowImage3} alt=""/></div>
                <div className="arrow-image" id="arrow4"><img src={arrowImage4} alt=""/></div>
            </div>
        </div>
    );
};