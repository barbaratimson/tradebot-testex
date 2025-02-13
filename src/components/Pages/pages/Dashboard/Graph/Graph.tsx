import "./Graph.scss"
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip} from "recharts";

export type GraphPoint = {x: number, y: number}

interface GraphProps {
    data: GraphPoint[]
}

const Graph = ({data}:GraphProps) => {
    return (
            <ResponsiveContainer>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#1f4c7f" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#1f4c7f" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid style={{opacity: "0.05"}}/>
                    <Tooltip contentStyle={{display: "none"}}/>
                    <Area type="monotone" dataKey="y" stroke="#2179d7" strokeWidth="2px" fillOpacity={1}
                          fill="url(#colorUv)"/>
                </AreaChart>
            </ResponsiveContainer>
    )
};

export default Graph;