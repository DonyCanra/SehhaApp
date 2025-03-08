import LogoutPage from "./Logout";
import Icons from "../../utils/icons/IconHeader";
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
  return (
    <div className="dropdown profile-dropdown d-flex">
      <div className="nav-link pe-0 leading-none" data-bs-toggle="dropdown">
        <span className="header-avatar1">
          <img src="/assets/images/users/17.jpg" alt="img" className="avatar avatar-md brround" />
        </span>
      </div>
      <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow animated">
        <div className="text-center">
          <div className="text-center user pb-0 font-weight-bold">Dony Canra</div>
          <span className="text-center user-semi-title">Software Engineer</span>
          <div className="dropdown-divider"></div>
        </div>
        <Link className="dropdown-item d-flex" to="/profile">
          <Icons.Profile />
          <div className="fs-13">Profile</div>
        </Link>
        <Link className="dropdown-item d-flex" to="/setting">
          <Icons.Setting />
          <div className="fs-13">Setting</div>
        </Link>
        <LogoutPage />
      </div>
    </div>
  );
};

export default ProfileDropdown;
