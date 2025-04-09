import Icons from "../../utils/icons/IconHeader";

const SearchFeatures = ({ openModalSearchFeature }) => {
  return (
    <>
      <div className="dropdown header-search d-flex" style={{ cursor: "pointer" }}>
        <div className="nav-link icon" onClick={openModalSearchFeature}>
          <Icons.Search />
        </div>
      </div>
      {/* <div className="d-md-block d-none" style={{ borderLeft: "1px solid #e4e4e4" }}>
        <div className="form-inline">
          <div className="search-element">
            <input onClick={openModalSearchFeature} type="search" className="form-control header-search mobile-view-search" placeholder="Search Features…" aria-label="SearchFeatures" tabIndex="1" />
            <button className="btn btn-primary-color" onClick={openModalSearchFeature}>
              <Icons.Search />
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SearchFeatures;
