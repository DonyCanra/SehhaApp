import Icons from "../../utils/icons/IconHeader";

const FullScreen = ({ toggleFullScreen }) => {
  return (
    <div className="dropdown header-fullscreen d-flex" onClick={toggleFullScreen} style={{ cursor: "pointer" }}>
      <div className="nav-link icon full-screen-link p-0" id="fullscreen-button">
        <Icons.FullScreen />
      </div>
    </div>
  );
};

export default FullScreen;
