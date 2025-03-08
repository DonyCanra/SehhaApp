import React from "react";

const stats = [
  { title: "Visits", value: "3,56,667", change: "0.7%", status: "up" },
  { title: "Avg visit Duration", value: "39Sec", change: "0.2%", status: "up" },
  { title: "Inpatient Count", value: "5,987", change: "12%", status: "down" },
  { title: "Outpatient Count", value: "35.8%", change: "0.2%", status: "up" },
  { title: "Bed Availability", value: "12", change: "1.2%", status: "down" },
  { title: "Goal Conversion", value: "12.7%", change: "0.6%", status: "down" },
];

const StatisticCard = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="row me-0 ms-0">
            {stats.map((stat, index) => (
              <div key={index} className={`col-xl-2 col-lg-6 col-sm-6 pe-0 ps-0 ${index !== stats.length - 1 ? "border-end" : ""}`}>
                <div className="card-body text-center">
                  <p className="mb-1">{stat.title}</p>
                  <h2 className="mb-1 font-weight-bold">{stat.value}</h2>
                  <span className="mb-0 text-muted">
                    <span className={`text-${stat.status === "up" ? "success" : "danger"}`}>
                      <i className={`fa fa-caret-${stat.status} me-1`}></i> {stat.change}
                    </span>{" "}
                    Last month
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticCard;
