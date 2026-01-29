"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";

const data = [
  { name: "Linux", value: 18000, color: "#9db7f9" },
  { name: "Mac", value: 30000, color: "#5eead4" },
  { name: "iOS", value: 22000, color: "#000000" },
  { name: "Windows", value: 35000, color: "#60a5fa" },
  { name: "Android", value: 14000, color: "#c4b5fd" },
  { name: "Other", value: 26000, color: "#86efac" },
];

export default function TrafficByDevice() {
  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
        Traffic by Device
      </h3>

      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} barSize={28}>
          <CartesianGrid
            vertical={false}
            strokeOpacity={0.15}
          />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#71717a", fontSize: 12 }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#71717a", fontSize: 12 }}
          />

          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              borderRadius: 10,
              border: "none",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
          />

          <Bar dataKey="value" radius={[10, 10, 10, 10]}>
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
