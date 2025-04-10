import React from "react";
import { Link, useLocation } from "react-router-dom";
import Timeline from "./Timeline";
import Record from "./Record";
import LogActivity from "./LogActivity";
import useModal from "../../../components/hooks/useModal";
import AddEMR from "./AddEMR";
import PageHeader from "../../../components/PageHeader";
import DropdownButton from "../../../components/Button/DropdownButton";

const userInfo = {
  name: "Dony Canra",
  email: "donicanrarofikar@gmail.com",
  location: "Riau, Indonesia",
  phone: "+62 822 2403 4729",
  role: "Software Engineer",
  avatar: "/assets/images/users/18.jpg",
  birthday: "10 Jan. 1997 (28)",
  gender: "Male",
  konsultasi: 2,
};

const iconInfo = ["role", "email", "location", "phone"];

const userDetails = [
  { icon: "fa-calendar", label: "Birthday", value: userInfo.birthday },
  { icon: "fa-users", label: "Gender", value: userInfo.gender },
  { icon: "fa-feed", label: "Konsultasi", value: userInfo.konsultasi },
];

const statusEMR = ["Engaged", "Done", "Failed"];
const tabEMR = ["Timeline", "Record", "Log Activity"];

const EMR = () => {
  const { isOpen: isOpenAddEMR, openModal: openModalAddEMR, closeModal: closeModalAddEMR } = useModal();
  const location = useLocation();
  const patientData = location.state?.patientData || {};
  console.log(patientData, "<<<");

  return (
    <div>
      <PageHeader title="Electronic Medical Record" />
      <div className="main-proifle">
        <div className="row">
          <div className="col-xl-8">
            <div className="box-widget widget-user">
              <div className="widget-user-image1 d-xl-flex d-block">
                <img alt="User Avatar" className="avatar brround" src={userInfo.avatar} />
                <div className="mt-1 ms-xl-5">
                  <h4 className="pro-user-username font-weight-bold">
                    {userInfo?.name} <i className="fa fa-check-circle text-success"></i>
                  </h4>
                  <ul className="pro-details">
                    {iconInfo?.map((key, idx) => (
                      <li key={idx}>
                        <span className={`profile-icon bg-${["danger", "success", "info", "warning"][idx]}-transparent text-${["danger", "success", "info", "warning"][idx]}`}>
                          <i className={`fe fe-${["globe", "mail", "flag", "phone-call"][idx]}`}></i>
                        </span>
                        <span className="h6 mt-3">{userInfo[key]}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 row">
                    {userDetails?.map((detail, index) => (
                      <div className="media col-sm-4 mb-3" key={index}>
                        <div className="media-icon bg-primary-transparent text-primary me-3 mt-1">
                          <i className={`fa ${detail.icon} fs-18`}></i>
                        </div>
                        <div className="media-body">
                          <small className="text-muted">{detail.label}</small>
                          <div className="font-weight-bold number-font">{detail.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 text-xl-right text-left btn-list mt-4">
            <DropdownButton options={statusEMR} defaultLabel="Engaged" icon={<i className="fa fa-calendar fs-14" />} onSelect={(val) => console.log("Date selected:", val)} />
            <Link onClick={openModalAddEMR} className="btn btn-outline-primary">
              + EMR
            </Link>
            <Link to="#" className="btn btn-primary">
              Edit Profile
            </Link>
          </div>
        </div>
        <div className="profile-cover">
          <div className="wideget-user-tab">
            <div className="tab-menu-heading p-0">
              <div className="tabs-menu1 px-3">
                <ul className="nav">
                  {tabEMR?.map((tab, index) => (
                    <li key={index}>
                      <a href={`#tab-${index + 7}`} className={`fs-14 ${index === 0 ? "active" : ""}`} data-bs-toggle="tab">
                        {tab}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-content">
          <Timeline />
          <Record />
          <LogActivity />
        </div>
      </div>
      <AddEMR show={isOpenAddEMR} onClose={closeModalAddEMR} />
    </div>
  );
};

export default EMR;
