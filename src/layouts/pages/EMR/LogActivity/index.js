import React from "react";
import { Link } from "react-router-dom";

const LogActivity = () => {
  return (
    <div className="tab-pane" id="tab-9">
      <ul className="timelineleft pb-5">
        <li className="timeleft-label">
          <span className="bg-cyan">10 May. 2025</span>
        </li>
        <li>
          <i className="fa fa-camera bg-orange"></i>
          <div className="timelineleft-item">
            <span className="time">
              <i className="fa fa-clock-o text-danger"></i> 2 days ago
            </span>
            <h3 className="timelineleft-header">
              <Link href="">Dr. Dony Canra</Link> uploaded new photos
            </h3>
            <div className="timelineleft-body">
              <img src="/assets/images/photos/5.jpg" alt="..." className="margin mt-2 mb-2" />
              <img src="/assets/images/photos/7.jpg" alt="..." className="margin mt-2 mb-2" />
            </div>
          </div>
        </li>
        <li>
          <i className="fa fa-envelope bg-primary"></i>
          <div className="timelineleft-item">
            <span className="time">
              <i className="fa fa-clock-o text-danger"></i> 12:05
            </span>
            <h3 className="timelineleft-header">
              <Link href="">Support Team</Link> <span>sent you an email</span>
            </h3>
            <div className="timelineleft-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate dui nec malesuada luctus.</div>
            <div className="timelineleft-footer">
              <Link className="btn btn-success text-white btn-sm">Read more</Link>
              <Link className="btn btn-danger text-white btn-sm">Delete</Link>
            </div>
          </div>
        </li>
        <li>
          <i className="fa fa-user bg-secondary"></i>
          <div className="timelineleft-item">
            <span className="time">
              <i className="fa fa-clock-o text-danger"></i> 5 mins ago
            </span>
            <h3 className="timelineleft-header no-border">
              <Link href="">Dr Dony</Link> updated vital signs patient
            </h3>
          </div>
        </li>
        <li>
          <i className="fa fa-comments bg-warning"></i>
          <div className="timelineleft-item">
            <span className="time">
              <i className="fa fa-clock-o text-danger"></i> 27 mins ago
            </span>
            <h3 className="timelineleft-header">
              <Link href="">Support Team</Link> commented on diagnoses patient
            </h3>
            <div className="timelineleft-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate dui nec malesuada luctus.</div>
            <div className="timelineleft-footer">
              <Link className="btn btn-info text-white btn-flat btn-sm">View comment</Link>
            </div>
          </div>
        </li>
        <li className="timeleft-label">
          <span className="bg-purple"> 3 Mar. 2025</span>
        </li>
        <li>
          <i className="fa fa-camera bg-orange"></i>
          <div className="timelineleft-item">
            <span className="time">
              <i className="fa fa-clock-o text-danger"></i> 2 days ago
            </span>
            <h3 className="timelineleft-header">
              <Link href="">Dr Dony Canra</Link> uploaded new photos
            </h3>
            <div className="timelineleft-body">
              <img src="../../assets/images/photos/1.jpg" alt="..." className="margin mt-2 mb-2" />
              <img src="../../assets/images/photos/2.jpg" alt="..." className="margin mt-2 mb-2" />
              <img src="../../assets/images/photos/3.jpg" alt="..." className="margin mt-2 mb-2" />
              <img src="../../assets/images/photos/4.jpg" alt="..." className="margin mt-2 mb-2" />
            </div>
          </div>
        </li>
        <li>
          <i className="fa fa-clock-o bg-success pb-3"></i>
        </li>
      </ul>
    </div>
  );
};

export default LogActivity;
