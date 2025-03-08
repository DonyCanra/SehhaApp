import Icons from "../../utils/icons/IconHeader";

const Notification = () => {
  return (
    <div className="dropdown header-notify d-flex">
      <div className="nav-link icon" data-bs-toggle="dropdown">
        <Icons.Notification />
        <span className="pulse"></span>
      </div>
      <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow animated">
        <div className="dropdown-header">
          <h6 className="mb-0">Notifications</h6>
          <span className="badge fs-10 bg-secondary br-7 ms-auto">New</span>
        </div>
        <div className="notify-menu">
          <div className="dropdown-item border-bottom d-flex ps-4">
            <div className="notifyimg text-primary bg-primary-transparent border-primary">
              {" "}
              <i className="fa fa-envelope"></i>{" "}
            </div>
            <div>
              <span className="fs-13">Message Sent.</span>
              <div className="small text-muted">3 hours ago</div>
            </div>
          </div>
          <div className="dropdown-item border-bottom d-flex ps-4">
            <div className="notifyimg text-secondary bg-secondary-transparent border-secondary">
              {" "}
              <i className="fa fa-shopping-cart"></i>
            </div>
            <div>
              <span className="fs-13">Order Placed</span>
              <div className="small text-muted">5 hour ago</div>
            </div>
          </div>
          <div className="dropdown-item border-bottom d-flex ps-4">
            <div className="notifyimg text-danger bg-danger-transparent border-danger">
              {" "}
              <i className="fa fa-gift"></i>{" "}
            </div>
            <div>
              <span className="fs-13">Event Started</span>
              <div className="small text-muted">45 mintues ago</div>
            </div>
          </div>
          <div className="dropdown-item border-bottom d-flex ps-4 mb-2">
            <div className="notifyimg text-success bg-success-transparent border-success">
              {" "}
              <i className="fa fa-windows"></i>{" "}
            </div>
            <div>
              <span className="fs-13">Your Admin lanuched</span>
              <div className="small text-muted">1 daya ago</div>
            </div>
          </div>
        </div>
        <div className="text-center p-2">
          <div className="btn btn-primary btn-md fs-13 btn-block">View All</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
