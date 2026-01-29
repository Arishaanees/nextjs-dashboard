import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { name: "Jan", thisYear: 12000, lastYear: 8000 },
  { name: "Feb", thisYear: 9000, lastYear: 10000 },
  { name: "Mar", thisYear: 15000, lastYear: 13000 },
  { name: "Apr", thisYear: 22000, lastYear: 7000 },
  { name: "May", thisYear: 28000, lastYear: 14000 },
  { name: "Jun", thisYear: 21000, lastYear: 18000 },
  { name: "Jul", thisYear: 24000, lastYear: 26000 },
];

export default function LineChartComponent() {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm">
      <h3 className="font-semibold mb-4 text-gray-800 dark:text-white">
        Total Users
      </h3>

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          {/* Gradient */}
          <defs>
            <linearGradient id="colorThisYear" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />

          <XAxis dataKey="name" />
          <YAxis />

          <Tooltip />

          {/* This Year (Solid + Gradient Area) */}
          <Area
            type="monotone"
            dataKey="thisYear"
            stroke="#6366f1"
            strokeWidth={2.5}
            fill="url(#colorThisYear)"
          />

          {/* Last Year (Dashed Line) */}
          <Line
            type="monotone"
            dataKey="lastYear"
            stroke="#94a3b8"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
