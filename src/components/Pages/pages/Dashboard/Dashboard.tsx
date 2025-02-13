import {BotsSelector} from "./BotsSelector/BotsSelector.tsx";
import data from "../../../../assets/data/data.min.json"
import "./Dashboard.scss"
import Graph, {GraphPoint} from "./Graph/Graph.tsx";
import {HCircleIcon} from "../../../../assets/svg/HCircleIcon.tsx";
import {setTimeRange, timeRange} from "../../../../store/timeRangeSlice.ts";
import {useAppDispatch, useAppSelector} from "../../../../store/store.ts";
import {useEffect, useState} from "react";
import {generateGraphArray} from "../../../../utils/utils.ts";

const exampleData = generateGraphArray(20)

export const Dashboard = () => {
    const dispatch = useAppDispatch()
    const setSelectedTimeRangeFunc = (timeRange: timeRange) => dispatch(setTimeRange(timeRange))
    const selectedTimeRange = useAppSelector(state => state.timeRange.selectedTimeRange)

    const [graphData, setGraphData] = useState<GraphPoint[]>(exampleData)

    useEffect(() => {
        setGraphData(generateGraphArray(20))
    }, [selectedTimeRange]);
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
            <div className="graph-wrapper">
                <Graph data={graphData}/>
            </div>
            <div className="bots-wrapper">
                <BotsSelector bots={data.bots}/>
            </div>
            <div className="time-selection">
                <div className="time-selection-title"></div>
                <button className="time-selection-button" onClick={() => setSelectedTimeRangeFunc("24h")}>24h</button>
                <button className="time-selection-button" onClick={() => setSelectedTimeRangeFunc("7d")}>7 days</button>
                <button className="time-selection-button" onClick={() => setSelectedTimeRangeFunc("30d")}>30 days
                </button>
                <button className="time-selection-button" onClick={() => setSelectedTimeRangeFunc("all_time")}>All
                    time
                </button>
            </div>
        </div>
    );
};