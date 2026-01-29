"use client";

import { FaBug, FaUser, FaWifi } from "react-icons/fa";

const notifications = [
  { icon: <FaBug />, title: "You fixed a bug.", time: "Just now" },
  { icon: <FaUser />, title: "New user registered.", time: "59 minutes ago" },
  { icon: <FaBug />, title: "You fixed a bug.", time: "12 hours ago" },
  { icon: <FaWifi />, title: "Andi Lane subscribed to you.", time: "Today, 11:59 AM" },
];

const activities = [
  { avatar: "https://i.pravatar.cc/150?img=10", title: "Changed the style.", time: "Just now" },
  { avatar: "https://i.pravatar.cc/150?img=20", title: "Released a new version.", time: "59 minutes ago" },
  { avatar: "https://i.pravatar.cc/150?img=30", title: "Submitted a bug.", time: "12 hours ago" },
  { avatar: "https://i.pravatar.cc/150?img=40", title: "Modified A data in Page X.", time: "Today, 11:59 AM" },
  { avatar: "https://i.pravatar.cc/150?img=50", title: "Deleted a page in Project X.", time: "Feb 2, 2025" },
];

const contacts = [
  { avatar: "https://i.pravatar.cc/150?img=60", name: "Natali Craig" },
  { avatar: "https://i.pravatar.cc/150?img=70", name: "Drew Cano" },
  { avatar: "https://i.pravatar.cc/150?img=80", name: "Andi Lane" },
  { avatar: "https://i.pravatar.cc/150?img=90", name: "Koray Okumus" },
  { avatar: "https://i.pravatar.cc/150?img=100", name: "Kate Morrison" },
  { avatar: "https://i.pravatar.cc/150?img=110", name: "Melody Macy" },
];

export default function RightPanel() {
  return (
    <aside className="hidden xl:block w-80 border-l border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 space-y-6 overflow-y-auto">
      {/* Notifications */}
      <div>
        <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-100">Notifications</h4>
        <ul className="space-y-3">
          {notifications.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
              <div className="w-8 h-8 flex items-center justify-center bg-zinc-100 dark:bg-zinc-700 rounded-full text-sm text-zinc-500 dark:text-zinc-200">
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm">{item.title}</p>
                <span className="text-xs text-zinc-400">{item.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Activities */}
      <div>
        <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-100">Activities</h4>
        <ul className="space-y-3">
          {activities.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
              <div className="flex-1">
                <p className="text-sm">{item.title}</p>
                <span className="text-xs text-zinc-400">{item.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Contacts */}
      <div>
        <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-100">Contacts</h4>
        <ul className="space-y-3">
          {contacts.map((contact, idx) => (
            <li key={idx} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
              <span className="text-sm">{contact.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
