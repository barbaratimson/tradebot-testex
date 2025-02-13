import {GraphPoint} from "../components/Pages/pages/Dashboard/Graph/Graph.tsx";

export const generateGraphArray = (length: number):GraphPoint[] => {
    const baseline = 200
    const data = Array.from({length: length}, () => Math.abs(Math.floor(Math.random() * 100)+baseline));
    return data.map((item, i) => ({ x: i, y: item }));
}