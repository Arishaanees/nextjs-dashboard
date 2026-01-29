// 'use client';

// export default function Header() {
//   return (
//     <header className="sticky top-0 z-30 h-16 bg-white/80 dark:bg-zinc-900/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
//       <div className="h-full flex items-center justify-between px-6">

//         {/* Left: Breadcrumb */}
//         <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
//           <span className="hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer">
//             Dashboards
//           </span>
//           <span>/</span>
//           <span className="font-medium text-zinc-900 dark:text-zinc-100">
//             Default
//           </span>
//         </div>

//         {/* Center: Search */}
//         <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 w-72">
//           <svg
//             className="w-4 h-4 text-zinc-400"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <circle cx="11" cy="11" r="8" />
//             <line x1="21" y1="21" x2="16.65" y2="16.65" />
//           </svg>
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-transparent outline-none border-none text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 w-full"
//           />
//         </div>

//         {/* Right: Icons */}
//         <div className="flex items-center gap-2">
//           {/* Settings */}
//           <button className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
//             ⚙️
//           </button>

//           {/* Notifications */}
//           <button className="relative p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
//             🔔
//             <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
//           </button>
//         </div>

//       </div>
//     </header>
//   );
// }
// 'use client';

// import DarkModeToggle from './DarkModeToggle';

// export default function Header() {
//   return (
//     <header className="sticky top-0 z-30 h-16 bg-white/80 dark:bg-zinc-900/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
//       <div className="h-full flex items-center justify-between px-6">

//         {/* Left: Breadcrumb */}
//         <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
//           <span className="hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer">
//             Dashboards
//           </span>
//           <span>/</span>
//           <span className="font-medium text-zinc-900 dark:text-zinc-100">
//             Default
//           </span>
//         </div>

//         {/* Center: Search */}
//         <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 w-72">
//           <svg
//             className="w-4 h-4 text-zinc-400"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <circle cx="11" cy="11" r="8" />
//             <line x1="21" y1="21" x2="16.65" y2="16.65" />
//           </svg>
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-transparent outline-none border-none text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 w-full"
//           />
//         </div>

//         {/* Right: Icons */}
//         <div className="flex items-center gap-2">
//           {/* Settings */}
//           <button className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
//             ⚙️
//           </button>

//           {/* Notifications */}
//           <button className="relative p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
//             🔔
//             <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
//           </button>

//           {/* Dark Mode Toggle */}
//           <DarkModeToggle />
//         </div>

//       </div>
//     </header>
//   );
// }
// 'use client';

// import { useState, useEffect } from 'react';

// // DarkModeToggle component
// function DarkModeToggle() {
//   const [dark, setDark] = useState(false);

//   useEffect(() => {
//     if (dark) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [dark]);

//   return (
//     <button
//       onClick={() => setDark(!dark)}
//       className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
//       title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//     >
//       {dark ? '🌙' : '☀️'}
//     </button>
//   );
// }

// export default function Header() {
//   return (
//     <header className="sticky top-0 z-30 h-16 bg-white/80 dark:bg-zinc-900/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
//       <div className="h-full flex items-center justify-between px-6">

//         {/* Left: Breadcrumb */}
//         <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
//           <span className="hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer">
//             Dashboards
//           </span>
//           <span>/</span>
//           <span className="font-medium text-zinc-900 dark:text-zinc-100">
//             Default
//           </span>
//         </div>

//         {/* Center: Search */}
//         <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 w-72">
//           <svg
//             className="w-4 h-4 text-zinc-400"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <circle cx="11" cy="11" r="8" />
//             <line x1="21" y1="21" x2="16.65" y2="16.65" />
//           </svg>
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-transparent outline-none border-none text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 w-full"
//           />
//         </div>

//         {/* Right: Icons */}
//         <div className="flex items-center gap-2">
//           {/* Settings */}
//           <button className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
//             ⚙️
//           </button>

//           {/* Notifications */}
//           <button className="relative p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
//             🔔
//             <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
//           </button>

//           {/* Dark Mode Toggle */}
//           <DarkModeToggle />
//         </div>

//       </div>
//     </header>
//   );
// }
// 'use client';

// import { useState, useEffect } from 'react';

// // DarkModeToggle Component
// function DarkModeToggle() {
//   const [dark, setDark] = useState(false);

//   useEffect(() => {
//     if (dark) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [dark]);

//   return (
//     <button
//       onClick={() => setDark(!dark)}
//       className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
//       title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//     >
//       {dark ? '🌙' : '☀️'}
//     </button>
//   );
// }

// export default function Header() {
//   return (
//     <header className="sticky top-0 z-30 h-16 bg-white/80 dark:bg-zinc-900/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
//       <div className="h-full flex items-center justify-between px-6">

//         {/* Left: Breadcrumb */}
//         <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
//           <span className="hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer font-medium">
//             Dashboards
//           </span>
//           <span>/</span>
//           <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
//             Default
//           </span>
//         </div>

//         {/* Center: Search */}
//         <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 w-72">
//           <svg
//             className="w-4 h-4 text-zinc-400"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <circle cx="11" cy="11" r="8" />
//             <line x1="21" y1="21" x2="16.65" y2="16.65" />
//           </svg>
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-transparent outline-none border-none text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 w-full"
//           />
//         </div>

//         {/* Right: Icons */}
//         <div className="flex items-center gap-2">
//           {/* Star/Favorite Button */}
//           <button className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
//             ⭐
//           </button>

//           {/* Settings */}
//           <button className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
//             ⚙️
//           </button>

//           {/* Notifications */}
//           <button className="relative p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
//             🔔
//             <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
//           </button>

//           {/* Dark Mode Toggle */}
//           <DarkModeToggle />
//         </div>

//       </div>
//     </header>
//   );
// }
'use client';

import { useState, useEffect } from 'react';

// DarkModeToggle Component
function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  // Sync with system preference or saved preference on first load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDark(false);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (dark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDark(true);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
      title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-30 h-16 bg-white/80 dark:bg-zinc-900/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
      <div className="h-full flex items-center justify-between px-6">

        {/* Left: Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <span className="hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer font-medium">
            Dashboards
          </span>
          <span>/</span>
          <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
            Default
          </span>
        </div>

        {/* Center: Search */}
        <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 w-72">
          <svg
            className="w-4 h-4 text-zinc-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none border-none text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 w-full"
          />
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-2">
          {/* Star/Favorite Button */}
          <button className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
            ⭐
          </button>

          {/* Settings */}
          <button className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
            ⚙️
          </button>

          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
            🔔
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* Dark Mode Toggle */}
          <DarkModeToggle />
        </div>

      </div>
    </header>
  );
}
