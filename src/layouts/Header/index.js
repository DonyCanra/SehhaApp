import React from "react";
// import { Link } from "react-router-dom";
import toggleFullScreen from "../../utils/toggleFullScreen";
// import Icons from "../../utils/icons/IconHeader";
import useModal from "../../components/hooks/useModal";
import HeaderBrand from "../../components/HeaderBrand";
import ProfileDropdown from "./ProfileDropdown";
import Notification from "./Notification";
import Message from "./Message";
// import ThemeLayout from "./ThemeLayout";
import FullScreen from "./FullScreen";
import SearchFeatures from "./SearchFeatures";
import ModalSearchFeatures from "./ModalSearchFeatures";
import ModalHospitals from "./ModalHospitals";
import Hospital from "./Hospital";
// import SearchFeatures from "./SearchFeatures";
// import Language from "./Language";

const Header = () => {
  const { isOpen: isOpenSearchFeature, openModal: openModalSearchFeature, closeModal: closeModalSearchFeature } = useModal();
  const { isOpen: isOpenHospitalsList, openModal: openModalHospitalsList, closeModal: closeModalHospitalsList } = useModal();

  return (
    <>
      <div className="app-header header main-header1">
        <div className="container-fluid">
          <div className="d-flex">
            <HeaderBrand />
            <Hospital />
            <div className="d-flex order-lg-2 ms-auto main-header-end">
              <button
                className="navbar-toggler navresponsive-toggler d-md-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent-4"
                aria-controls="navbarSupportedContent-4"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <i className="fe fe-more-vertical header-icons navbar-toggler-icon"></i>
              </button>
              <div className="navbar navbar-expand-lg navbar-collapse responsive-navbar p-0">
                <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                  <div className="d-flex order-lg-2">
                    {/* <SearchFeatures /> */}
                    {/* <ThemeLayout /> */}
                    <FullScreen toggleFullScreen={toggleFullScreen} />
                    {/* <div className="app-sidebar__toggle d-flex" data-bs-toggle="sidebar">
                      <div className="open-toggle">
                        <Icons.Toggle />
                      </div>
                    </div> */}
                    <SearchFeatures openModalSearchFeature={openModalSearchFeature} />
                    {/* <Language /> */}
                    <Message />
                    <Notification />
                    <ProfileDropdown openModalHospitalsList={openModalHospitalsList} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalSearchFeatures show={isOpenSearchFeature} onClose={closeModalSearchFeature} />
      <ModalHospitals show={isOpenHospitalsList} onClose={closeModalHospitalsList} />
    </>
  );
};

export default Header;
