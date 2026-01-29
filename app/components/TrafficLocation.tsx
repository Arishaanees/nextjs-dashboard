"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "United States", value: 52.1 },
  { name: "Canada", value: 22.8 },
  { name: "Mexico", value: 13.9 },
  { name: "Other", value: 11.2 },
];

const COLORS = ["#0f172a", "#60a5fa", "#86efac", "#e5e7eb"];

export default function TrafficLocation() {
  return (
    <div>
      {/* Heading */}
      <h3 className="font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Traffic by Location
      </h3>

      <div className="flex items-center gap-6">
        {/* Donut Chart */}
        <div className="w-[180px] h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
                stroke="none"
              >
                {data.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip
                formatter={(value: number) => `${value}%`}
                contentStyle={{
                  borderRadius: 10,
                  border: "none",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="space-y-2 text-sm">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center gap-3">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              />
              <span className="w-28 text-zinc-700 dark:text-zinc-300">
                {item.name}
              </span>
              <span className="text-zinc-500">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
