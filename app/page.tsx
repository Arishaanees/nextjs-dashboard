
"use client";

import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import LineChart from "./components/LineChart";
import TrafficWebsite from "./components/TrafficWebsite";
import TrafficDevice from "./components/TrafficDevice";
import TrafficLocation from "./components/TrafficLocation";
import RightPanel from "./components/RightPanel";
import Sidebar from "./components/Sidebar";
import OrderList from "./components/OrderList"; // Added OrderList

export default function Page() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64 p-6 space-y-6">
        <Header />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard title="Views" value="7,265" change="+11.01%" />
          <StatsCard title="Visits" value="3,671" change="-0.03%" />
          <StatsCard title="New Users" value="256" change="+15.03%" />
          <StatsCard title="Active Users" value="2,318" change="+6.08%" />
        </div>

        {/* Order List */}
        {/* <div className="bg-white dark:bg-zinc-900 rounded-xl p-5">
          <OrderList />
        </div> */}

        {/* LineChart + TrafficWebsite */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-xl p-5">
            <LineChart />
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-xl p-5">
            <TrafficWebsite />
          </div>
        </div>

        {/* TrafficDevice + TrafficLocation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-zinc-900 rounded-xl p-5">
            <TrafficDevice />
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-xl p-5">
            <TrafficLocation />
          </div>
           {/* <div className="bg-white dark:bg-zinc-900 rounded-xl p-5">
          <OrderList />
        </div> */}
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded-xl p-5">
          <OrderList />
        </div>
      </div>

      {/* Right Panel */}
      <RightPanel />
    </div>
  );
}
