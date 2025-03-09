import Icons from "../../utils/icons/IconHeader";

const SearchFeatures = ({ openModalSearchFeature }) => {
  return (
    <>
      <div className="mt-1 d-md-block d-none">
        <div className="form-inline">
          <div className="search-element">
            <input onClick={openModalSearchFeature} type="search" className="form-control header-search mobile-view-search" placeholder="Search Features…" aria-label="SearchFeatures" tabIndex="1" />
            <button className="btn btn-primary-color" onClick={openModalSearchFeature}>
              <Icons.Search />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFeatures;
