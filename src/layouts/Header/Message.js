import Icons from "../../utils/icons/IconHeader";

const Message = () => {
  return (
    <div className="dropdown header-message d-flex">
      <div className="nav-link icon" data-bs-toggle="dropdown">
        <Icons.Message />
        <span className="badge bg-success side-badge">5</span>
      </div>
      <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow animated">
        <div className="dropdown-header">
          <h6 className="mb-0">Messages</h6>
          <span className="badge fs-10 bg-secondary br-7 ms-auto">New</span>
        </div>
        <div className="header-dropdown-list message-menu">
          <div className="dropdown-item border-bottom">
            <div className="d-flex align-items-center">
              <div className="">
                <span className="avatar avatar-md brround align-self-center cover-image" data-image-src="/assets/images/users/1.jpg"></span>
              </div>
              <div className="d-flex mt-1 mb-1">
                <div className="ps-3">
                  <span className="mb-1 fs-13">Dony Canra</span>
                  <p className="fs-12 mb-1">I am software Engineer</p>
                  <div className="fs-11 text-muted">3 hours ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center p-2 pt-3 border-top">
          <div className="fs-13 btn btn-primary btn-md btn-block">See More</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
