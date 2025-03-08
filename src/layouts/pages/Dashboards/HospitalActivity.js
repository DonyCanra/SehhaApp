import React from "react";
import { Link } from "react-router-dom";

const activities = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  time: "6:45pm",
  category: "Apotek",
  percentage: "52%",
  description: "More than 200 new recipes are added"
}));

const HospitalActivity = () => (
  <div className="card" style={{ height: "800px" }}>
    <div className="card-header">
      <h3 className="card-title">Hospital Activity</h3>
      <div className="card-options">
        <Link to="#" className="btn btn-sm btn-primary">
          View All
        </Link>
      </div>
    </div>
    <div className="card-body p-0">
      <ul className="recent-activity">
        {activities.map(activity => (
          <li className="mb-5 mt-5" key={activity.id}>
            <div>
              <span className="activity-timeline bg-primary text-white">{activity.id}</span>
              <div className="activity-timeline-content">
                <span className="font-weight-normal1 fs-13">{activity.category},</span>
                <span className="text-muted fs-12 float-end">{activity.time}</span>
                <span className="activity-sub-content text-info fs-11">{activity.percentage} New recipes</span>
                <p className="text-muted fs-12 mt-1">{activity.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default HospitalActivity;
