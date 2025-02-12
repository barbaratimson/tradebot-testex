import {BotsSelector} from "./BotsSelector/BotsSelector.tsx";
import data from "../../../../assets/data/data.min.json"
import "./Dashboard.scss"
import Graph, {GraphPoint} from "./Graph/Graph.tsx";
import {HCircleIcon} from "../../../../assets/svg/HCircleIcon.tsx";

const exampleData = Array.from({length: 20}, () => Math.abs(Math.floor(Math.random() * 150)));

const formattedData:GraphPoint[] = exampleData.map((item, i) => ({ x: i, y: item }));

export const Dashboard = () => {
    return (
        <div className="page pages-dashboard">
            <div className="dashboard-header">
                <div className="dashboard-header-title">TRADING CAPITAL</div>
                <div className="dashboard-balance">
                    <div className="dashboard-balance-capital">{data.trading_capital.toFixed(5)}</div>
                    <div className="dashboard-balance-currency">{data.trading_capital_currency.toUpperCase()}</div>
                    <div className="dashboard-balance-additional">
                        <div className="balance-additional-wrapper">
                            <div className="balance-additional-title">BALANCE:</div>
                            <div className="balance-additional-amount">{data.balance}</div>
                            <div className="balance-additional-image"><HCircleIcon/></div>
                        </div>
                        <div className="balance-additional-wrapper">
                            <div className="balance-additional-title">ON HOLD:</div>
                            <div className="balance-additional-amount">{data.on_hold}</div>
                            <div className="balance-additional-image"><HCircleIcon/></div>
                        </div>
                    </div>
                </div>
            </div>
            <Graph data={formattedData}/>
            <div className="bots-wrapper">
                <BotsSelector bots={data.bots}/>
            </div>
            <div className="time-selection">
                <div className="time-selection-title"></div>
                <button className="time-selection-button">24h</button>
                <button className="time-selection-button">7 days</button>
                <button className="time-selection-button">30 days</button>
                <button className="time-selection-button">All time</button>
            </div>
        </div>
    );
};