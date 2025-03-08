import Icons from "../../utils/icons/IconHeader";

const ThemeLayout = () => {
  return (
    <div className="dropdown d-flex">
      <div className="nav-link icon theme-layout nav-link-bg layout-setting">
        <span className="light-layout">
          <Icons.Light />
        </span>
        <span className="dark-layout">
          <Icons.Dark />
        </span>
      </div>
    </div>
  );
};

export default ThemeLayout;
