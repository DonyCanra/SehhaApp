// import Icons from "../../utils/icons/IconHeader";

const Language = () => {
  return (
    <div className="dropdown country-selector d-flex">
      <div className="nav-link leading-none" data-bs-toggle="dropdown">
        <span className="header-avatar1">
          <img src="/assets/images/us_flag.jpg" alt="img" className="me-2 country" />
          <span className="fs-14 font-weight-semibold"> English</span>
        </span>
      </div>
      <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow animated">
        <div className="dropdown-item d-flex">
          <img src="/assets/images/germany_flag.jpg" alt="img" className="me-2 country mt-1" />
          <span className="fs-13"> Germany</span>
        </div>
        <div className="dropdown-item d-flex">
          <img src="/assets/images/italy_flag.jpg" alt="img" className="me-2 country mt-1" />
          <span className="fs-13"> Italy</span>
        </div>
        <div className="dropdown-item d-flex">
          <img src="/assets/images/russia_flag.jpg" alt="img" className="me-2 country mt-1" />
          <span className="fs-13"> Russia</span>
        </div>
        <div className="dropdown-item d-flex">
          <img src="/assets/images/spain_flag.jpg" alt="img" className="me-2 country mt-1" />
          <span className="fs-13"> Spain</span>
        </div>
      </div>
    </div>
  );
};

export default Language;
