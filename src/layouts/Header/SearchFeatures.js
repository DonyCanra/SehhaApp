import useModal from "../../components/hooks/useModal";
import Icons from "../../utils/icons/IconHeader";
import ModalSearchFeatures from "./ModalSearchFeatures";

const SearchFeatures = () => {
  const { isOpen: isOpenSearchFeature, openModal: openModalSearchFeature, closeModal: closeModalSearchFeature } = useModal();
  return (
    <>
      <div className="mt-1 d-md-block d-none">
        <div className="form-inline">
          <div className="search-element">
            <input type="search" className="form-control header-search mobile-view-search" placeholder="Search…" aria-label="Search" tabIndex="1" />
            <button className="btn btn-primary-color" onClick={openModalSearchFeature}>
              <Icons.Search />
            </button>
          </div>
        </div>
      </div>
      <ModalSearchFeatures show={isOpenSearchFeature} onClose={closeModalSearchFeature} />
    </>
  );
};

export default SearchFeatures;
