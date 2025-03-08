import Icons from "../../utils/icons/IconHeader";

const FullScreen = ({ toggleFullScreen }) => {
  return (
    <div class="dropdown header-fullscreen d-flex" onClick={toggleFullScreen}>
      <div class="nav-link icon full-screen-link p-0" id="fullscreen-button">
        <Icons.FullScreen />
      </div>
    </div>
  );
};

export default FullScreen;
