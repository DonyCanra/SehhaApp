import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoutPage from "./Logout";
import Icons from "../../utils/icons/IconHeader";

const ProfileDropdown = () => {
  const user = useSelector((state) => state.auth.KConfiqData || null);

  const getFullName = () => (user ? `${user.firstName} ${user.lastName}` : "Guest");

  const getRole = () => user?.role?.name || "No Role";

  const avatarSrc = user?.avatar || "/assets/images/users/17.jpg";

  return (
    <div className="dropdown profile-dropdown d-flex">
      {/* Avatar User */}
      <div className="nav-link pe-0 leading-none" data-bs-toggle="dropdown">
        <span className="header-avatar1">
          <img src={avatarSrc} alt="profile-img" className="avatar avatar-md brround" />
        </span>
      </div>

      {/* Dropdown Menu */}
      <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow animated">
        <div className="text-center">
          <div className="text-center user pb-0 font-weight-bold">{getFullName()}</div>
          <span className="text-center user-semi-title">{getRole()}</span>
          <div className="dropdown-divider"></div>
        </div>

        {/* Menu Items */}
        <Link className="dropdown-item d-flex" to="/profile">
          <Icons.Profile />
          <div className="fs-13">Profile</div>
        </Link>
        <Link className="dropdown-item d-flex" to="/setting">
          <Icons.Setting />
          <div className="fs-13">Settings</div>
        </Link>

        {/* Logout */}
        <LogoutPage />
      </div>
    </div>
  );
};

export default ProfileDropdown;
