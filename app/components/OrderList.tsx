"use client";

import { useState } from "react";

type Order = {
  id: string;
  user: { name: string; avatar: string };
  project: string;
  address: string;
  date: string;
  status: "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected";
};

const orders: Order[] = [
  {
    id: "#CM9801",
    user: { name: "Natali Craig", avatar: "https://i.pravatar.cc/150?img=60" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: { name: "Kate Morrison", avatar: "https://i.pravatar.cc/150?img=70" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "https://i.pravatar.cc/150?img=80" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "https://i.pravatar.cc/150?img=90" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "https://i.pravatar.cc/150?img=100" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2025",
    status: "Rejected",
  },
];

const statusColors: Record<Order["status"], string> = {
  "In Progress": "text-indigo-500",
  Complete: "text-green-500",
  Pending: "text-blue-500",
  Approved: "text-yellow-500",
  Rejected: "text-gray-400",
};

export default function OrderList() {
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter(
    (o) =>
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.user.name.toLowerCase().includes(search.toLowerCase()) ||
      o.project.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-gray-200 dark:border-zinc-800">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800 dark:text-gray-100">Order List</h3>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-1 border border-zinc-300 dark:border-zinc-700 rounded text-sm bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="text-zinc-500 dark:text-zinc-400 text-xs uppercase">
            <tr>
              <th className="px-4 py-2">
                <input type="checkbox" className="w-4 h-4" />
              </th>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">User</th>
              <th className="px-4 py-2">Project</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody className="text-zinc-700 dark:text-zinc-300">
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-b border-zinc-200 dark:border-zinc-800">
                <td className="px-4 py-2">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2 flex items-center gap-2">
                  {/* <img
                    src={order.user.avatar}
                    alt={order.user.name}
                    className="w-6 h-6 rounded-full object-cover"
                  /> */}
                  {order.user.name}
                </td>
                <td className="px-4 py-2">{order.project}</td>
                <td className="px-4 py-2">{order.address}</td>
                <td className="px-4 py-2">{order.date}</td>
                <td className={`px-4 py-2 font-medium ${statusColors[order.status]}`}>
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center mt-4 space-x-2 text-sm text-zinc-500">
        <button className="px-2 py-1 border rounded border-zinc-300 dark:border-zinc-700">{"<"}</button>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            className="px-2 py-1 border rounded border-zinc-300 dark:border-zinc-700"
          >
            {n}
          </button>
        ))}
        <button className="px-2 py-1 border rounded border-zinc-300 dark:border-zinc-700">{">"}</button>
      </div>
    </div>
  );
}
