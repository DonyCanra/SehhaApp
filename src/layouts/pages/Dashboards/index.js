import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardStats from "./DashboardStats";
import SalesChart from "./SalesChart";
import HospitalActivity from "./HospitalActivity";
import StatisticCard from "./StatisticCard";

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <DashboardStats />
      <StatisticCard />
      <div className="row">
        <div className="col-xl-8">
          <SalesChart />
        </div>
        <div className="col-xl-4">
          <HospitalActivity />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
