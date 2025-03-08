import React from "react";
import { Link } from "react-router-dom";

const Record = () => {
  return (
    <div className="tab-pane" id="tab-8">
      <div className="card p-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="d-flex align-items-center border p-3 mb-3 br-7">
              <div className="avatar avatar-lg brround d-block cover-image" data-image-src="/assets/images/users/7.jpg"></div>
              <div className="wrapper ms-3">
                <p className="mb-0 mt-1 font-weight-semibold">Rawat Jalan</p>
                <small className="text-muted">Created: 20 Jan. 2025</small>
              </div>
              <div className="float-end ms-auto">
                <Link href="" className="btn btn-primary btn-md">
                  View
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex align-items-center border p-3 mb-3 br-7">
              <div className="avatar avatar-lg brround d-block cover-image" data-image-src="/assets/images/users/6.jpg"></div>
              <div className="wrapper ms-3">
                <p className="mb-0 mt-1 font-weight-semibold">Unit Gawat Darurat</p>
                <small className="text-muted">Created: 1 Jan. 2025</small>
              </div>
              <div className="float-end ms-auto">
                <Link href="" className="btn btn-primary btn-md">
                  View
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <Link className="btn d-grid btn-light" href="">
              <i className="fe fe-chevron-down"></i> See All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Record;
