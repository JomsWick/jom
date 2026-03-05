import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ title, data = {} }) => {
    const [filter, setFilter] = useState("month");
    const rows = data?.[filter] || [];

    const getBackgroundColors = (ctx) => {
        const colors = [
            ["rgba(0,128,128,0.7)", "rgba(0,255,255,0.7)"],
            ["rgba(0,191,255,0.7)", "rgba(135,206,250,0.7)"],
            ["rgba(255,165,0,0.7)", "rgba(255,140,0,0.7)"], 
        ];

        return rows.map((_, i) => {
            const gradient = ctx.createLinearGradient(0, 0, 0, 300);
            const colorPair = colors[i % colors.length];
            gradient.addColorStop(0, colorPair[0]);
            gradient.addColorStop(1, colorPair[1]);
            return gradient;
        });
    };

    const chartData = {
        labels: rows.map((i) => i.status),
        datasets: [
            {
                data: rows.map((i) => i.count),
                backgroundColor: function (context) {
                return getBackgroundColors(context.chart.ctx);
                },
                borderWidth: 2,
                borderColor: "#fff",
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                align: "end",
                labels: {
                    usePointStyle: true,
                    pointStyle: "circle",
                    padding: 15,
                    boxWidth: 48,
                },
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div className="p-4w-full max-w-md mx-auto">
            <div className="flex justify-end gap-2 mb-4">
                {["day", "week", "month", "year"].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-3 py-1 rounded-full text-teal-700 text-sm font-bold ${
                        filter === f ? "bg-teal-700 text-white" : "bg-teal-100"
                        }`}
                    >
                        {f.toUpperCase()}
                    </button>
                ))}
            </div>
            <div style={{ height: 300 }}>
                <Pie data={chartData} options={options} />
            </div>
        </div>
    );
};

export default PieChart;