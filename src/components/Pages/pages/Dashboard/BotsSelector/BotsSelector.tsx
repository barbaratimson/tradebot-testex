import "./BotsSelector.scss"
import arrowImage1 from "../../../../../assets/arrows/arrow_1.png"
import arrowImage2 from "../../../../../assets/arrows/arrow_2.png"
import arrowImage3 from "../../../../../assets/arrows/arrow_3.png"
import arrowImage4 from "../../../../../assets/arrows/arrow_4.png"
import orangeBot from "../../../../../assets/bots/orange_bot.png"
import placeholderBot from "../../../../../assets/bots/empty_slot.png"
import blueBot from "../../../../../assets/bots/blue_bot.png"
import greenBot from "../../../../../assets/bots/green_bot.png"
import yellowBot from "../../../../../assets/bots/yellow_bot.png"
import redBot from "../../../../../assets/bots/red_bot.png"


import {BotT} from "../../../../../utils/types.ts";
import {useAppSelector} from "../../../../../store/store.ts";

interface BotsSelectorProps {
    bots: BotT[]

}

export const BotsSelector = ({bots}: BotsSelectorProps) => {
    const selectedTimeRange = useAppSelector(state => state.timeRange.selectedTimeRange)
    return (
        <div className="bots-selector">
            <div className="bot-button">
                <div className="bot-icon"><img src={orangeBot} alt="Bot icon"/></div>
                <div className="bot-title">ATTACK</div>
                <div
                    className={`bot-percent ${bots[5][selectedTimeRange] == 0 ? "" : bots[5][selectedTimeRange] > 0 ? "percent-green" : "percent-red"}`}>{bots[5][selectedTimeRange] + "%"}</div>
            </div>
            <div className="bot-button">
                <div className="bot-icon"><img src={placeholderBot} alt="Bot icon"/></div>
                <div className="bot-title bot-empty">PLACE BOT<br/>HERE</div>
            </div>
            <div className="bot-button">
                <div className="bot-icon"><img src={blueBot} alt="Bot icon"/></div>
                <div className="bot-title">BALANCE</div>
                <div
                    className={`bot-percent ${bots[4][selectedTimeRange] == 0 ? "" : bots[4][selectedTimeRange] > 0 ? "percent-green" : "percent-red"}`}>{bots[4][selectedTimeRange] + "%"}</div>
            </div>
            <div className="bot-button">
                <div className="bot-icon"><img src={greenBot} alt="Bot icon"/></div>
                <div className="bot-title">DEFENCE</div>
                <div
                    className={`bot-percent ${bots[2][selectedTimeRange] == 0 ? "" : bots[2][selectedTimeRange] > 0 ? "percent-green" : "percent-red"}`}>{bots[2][selectedTimeRange] + "%"}</div>
            </div>
            <div className="bot-button">
                <div className="bot-icon"><img src={yellowBot} alt="Bot icon"/></div>
                <div className="bot-title">MEGABOT</div>
                <div
                    className={`bot-percent ${bots[0][selectedTimeRange] == 0 ? "" : bots[0][selectedTimeRange] > 0 ? "percent-green" : "percent-red"}`}>{bots[0][selectedTimeRange] + "%"}</div>
            </div>
            <div className="bot-button">
                <div className="bot-icon"><img src={redBot} alt="Bot icon"/></div>
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