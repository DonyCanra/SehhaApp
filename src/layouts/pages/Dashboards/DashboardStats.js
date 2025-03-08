import React from "react";

const stats = [
  { label: "Total Patient", value: "1.257", growth: "76%", icon: "spark1", class: "dash1" },
  { label: "Total Recipe", value: "257", growth: "76%", icon: "spark4", class: "dash2" },
  { label: "Total Outcome", value: "$1.257", growth: "76%", icon: "spark1", class: "dash3" },
  { label: "Total Income", value: "$3.257", growth: "76%", icon: "spark1", class: "dash4" }
];

const DashboardStats = () => (
  <div className="row">
    {stats.map((stat, index) => (
      <div key={index} className="col-xl-3 col-lg-6 col-md-6 col-xm-12">
        <div className={`card overflow-hidden dash1-card border-0 ${stat.class}`}>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-6">
                <div>
                  <span className="fs-14 font-weight-normal">{stat.label}</span>
                  <h2 className="mb-2 number-font carn1 font-weight-bold">{stat.value}</h2>
                  <span>
                    <i className="fe fe-arrow-up-circle"></i> {stat.growth} <span className="ms-1 fs-11">Growth This Month</span>
                  </span>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-6 my-auto mx-auto">
                <div className="mx-auto text-right">
                  <div id={stat.icon}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default DashboardStats;
