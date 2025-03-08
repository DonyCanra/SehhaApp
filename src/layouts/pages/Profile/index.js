import React from "react";
import FormProfile from "./FormProfile";
import useModal from "../../../components/hooks/useModal";
import ProfileCard from "./ProfileCard";
import PersonalDetails from "./PersonalDetails";
import VisionMission from "./VisionMission";
import HonorsCertifications from "./HonorsCertifications";
import PolisSection from "./PolisSection";
import ContactSection from "./ContactSection";
import PageHeader from "../../../components/PageHeader";

const Profile = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <PageHeader title="Profile" />
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-12">
          <ProfileCard openModal={openModal} />
          <PersonalDetails />
        </div>
        <div className="col-xl-9 col-lg-9 col-md-12">
          <VisionMission />
          <HonorsCertifications />
          <PolisSection />
          <ContactSection />
        </div>
      </div>
      <FormProfile title="Edit Profile" show={isOpen} onClose={closeModal} />
    </>
  );
};

export default Profile;