export default function TrafficWebsite() {
  const sites = ["Google", "YouTube", "Instagram", "Pinterest", "Facebook", "Twitter"];

  return (
    <>
      <h3 className="font-semibold mb-4">Traffic by Website</h3>
      <ul className="space-y-3 text-sm">
        {sites.map(site => (
          <li key={site} className="flex justify-between text-zinc-600 dark:text-zinc-400">
            {site}
            <span>━━━</span>
          </li>
        ))}
      </ul>
    </>
  );
}
