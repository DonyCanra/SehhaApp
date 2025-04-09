import { Link } from "react-router-dom";

const SidebarBrand = () => {
  return (
    <div className="header-brand">
      <Link to="/">
        <img src="/assets/images/brand/logo.png" className="header-brand-img desktop-lgo" alt="logo" />
      </Link>
      <Link to="/">
        <img src="/assets/images/brand/logo1.png" className="header-brand-img dark-logo" alt="logo" />
      </Link>
      <Link to="/">
        <img src="/assets/images/brand/favicon.png" className="header-brand-img mobile-logo" alt="logo" />
      </Link>
      <Link to="/">
        <img src="/assets/images/brand/favicon1.png" className="header-brand-img darkmobile-logo" alt="logo" />
      </Link>
    </div>
  );
};

export default SidebarBrand;
