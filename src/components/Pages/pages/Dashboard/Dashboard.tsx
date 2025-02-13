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
                    <div className="dashboard-balance-capital">1.00865</div>
                    <div className="dashboard-balance-currency">BTC</div>
                    <div className="dashboard-balance-additional">
                        <div className="balance-additional-wrapper">
                            <div className="balance-additional-title">BALANCE:</div>
                            <div className="balance-additional-amount">10 850</div>
                            <div className="balance-additional-image"><HCircleIcon/></div>
                        </div>
                        <div className="balance-additional-wrapper">
                            <div className="balance-additional-title">ON HOLD:</div>
                            <div className="balance-additional-amount">24 000</div>
                            <div className="balance-additional-image"><HCircleIcon/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="graph-wrapper">
                <Graph data={graphData}/>
                <div className="graph-overlay">
                    <div className="graph-overlay-text">
                        +32.6%
                    </div>
                </div>
            </div>
            <div className="timeline">
                <div className="timeline-date">22.04</div>
                <div className="timeline-date">23.04</div>
                <div className="timeline-date">24.04</div>
                <div className="timeline-date">25.04</div>
                <div className="timeline-date">26.04</div>
            </div>
            <div className="bots-wrapper">
                <BotsSelector bots={data.bots}/>
            </div>
            <div className="time-selection">
                <div className="time-selection-title">Time Range:</div>
                <button className={`time-selection-button ${selectedTimeRange === "24h" ? "selected" : ""}`} onClick={() => setSelectedTimeRangeFunc("24h")}>24h</button>
                <button className={`time-selection-button ${selectedTimeRange === "7d" ? "selected" : ""}`} onClick={() => setSelectedTimeRangeFunc("7d")}>7 days</button>
                <button className={`time-selection-button ${selectedTimeRange === "30d" ? "selected" : ""}`} onClick={() => setSelectedTimeRangeFunc("30d")}>30 days
                </button>
                <button className={`time-selection-button ${selectedTimeRange === "all_time" ? "selected" : ""}`} onClick={() => setSelectedTimeRangeFunc("all_time")}>All
                    time
                </button>
            </div>
        </div>
    );
};