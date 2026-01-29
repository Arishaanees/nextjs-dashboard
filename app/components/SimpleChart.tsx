export default function SimpleChart() {
  // Simple bar chart using divs
  const data = [65, 80, 45, 90, 70, 85, 60, 75, 55, 95, 50, 88];
  const maxValue = Math.max(...data);

  return (
    <div className="h-64 flex items-end justify-between gap-2">
      {data.map((value, index) => {
        const height = (value / maxValue) * 100;
        return (
          <div key={index} className="flex-1 flex flex-col items-center group">
            <div className="w-full flex items-end justify-center h-48">
              <div
                className="w-full rounded-t-lg bg-gradient-to-t from-blue-500 to-blue-400 dark:from-blue-600 dark:to-blue-500 transition-all hover:opacity-80 cursor-pointer"
                style={{ height: `${height}%` }}
                title={`${value}%`}
              />
            </div>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}
            </span>
          </div>
        );
      })}
    </div>
  );
}
