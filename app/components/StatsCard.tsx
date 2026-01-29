// interface StatsCardProps {
//   title: string;
//   value: string;
//   change: string;
//   trend: 'up' | 'down';
//   icon: string;
// }

// export default function StatsCard({ title, value, change, trend, icon }: StatsCardProps) {
//   return (
//     <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow">
//       <div className="flex items-start justify-between mb-4">
//         <div className="p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800">
//           <span className="text-2xl">{icon}</span>
//         </div>
//         <span className={`text-sm font-medium ${
//           trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
//         }`}>
//           {trend === 'up' ? '↑' : '↓'} {change}
//         </span>
//       </div>
//       <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">{title}</h3>
//       <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">{value}</p>
//     </div>
//   );
// }
export default function StatCard({ title, value, change }: any) {
  return (
    <div className="rounded-xl bg-white dark:bg-zinc-900 p-5 shadow-sm">
      <p className="text-sm text-zinc-500">{title}</p>
      <h3 className="text-2xl font-semibold mt-1">{value}</h3>
      <span className="text-xs text-green-500">{change}</span>
    </div>
  );
}
