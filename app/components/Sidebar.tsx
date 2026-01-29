
'use client';

import { useState } from 'react';

const menu = [
  {
    section: 'Favorites',
    items: [
      { label: 'Overview', icon: '📊', active: false },
      { label: 'Projects', icon: '💼', active: false },
    ],
  },
  {
    section: 'Dashboards',
    items: [
      { label: 'Overview', icon: '📊', active: true },
      { label: 'eCommerce', icon: '📧', active: false },
      { label: 'Projects', icon: '📁', active: false },
    ],
  },
  {
    section: 'Pages',
    items: [
      {
        label: 'User Profile',
        icon: '👤',
        subItems: ['Overview', 'Projects', 'Campaigns', 'Documents', 'Followers'],
      },
      { label: 'Account', icon: '🛠️' },
      { label: 'Corporate', icon: '🏢' },
      { label: 'Blog', icon: '📝' },
      { label: 'Social', icon: '💬' },
    ],
  },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('Overview');

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 flex flex-col">
      {/* Logo + Profile */}
      <div className="h-28 flex flex-col justify-center px-6 border-b border-zinc-200 dark:border-zinc-800">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-2">
          <img
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            className="w-6 h-6 object-contain"
          />
          <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            ByeWind
          </h1>
        </div>

        {/* User Profile */}
        {/*  */}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        {menu.map((section, i) => (
          <div key={i} className="mb-6">
            <p className="text-xs font-semibold text-zinc-400 uppercase mb-2">
              {section.section}
            </p>
            <ul className="space-y-1">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => setActiveItem(item.label)}
                    className={`w-full flex items-center justify-between px-4 py-2 rounded-lg text-left text-sm transition-colors ${
                      activeItem === item.label
                        ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 font-medium'
                        : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </span>
                    {item.subItems && (
                      <span className="text-zinc-400 dark:text-zinc-500 text-xs">▶</span>
                    )}
                  </button>

                  {item.subItems && (
                    <ul className="pl-8 mt-1 space-y-1">
                      {item.subItems.map((sub, sidx) => (
                        <li key={sidx}>
                          <button
                            onClick={() => setActiveItem(sub)}
                            className={`w-full text-left text-sm px-2 py-1 rounded-lg transition-colors ${
                              activeItem === sub
                                ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 font-medium'
                                : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800'
                            }`}
                          >
                            {sub}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
