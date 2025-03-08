import React from "react";

const ProfileCard = ({ openModal }) => (
  <div className="card box-widget widget-user">
    <div className="widget-user-image mx-auto mt-5">
      <img
        alt="User Avatar"
        className="rounded-circle"
        src="https://marketplace.canva.com/EAFy_Odspp4/1/0/1600w/canva-hijau-dan-biru-modern-logo-klinik-kesehatan-Ob6CJsae0us.jpg"
      />
    </div>
    <div className="card-body text-center">
      <div className="pro-user">
        <h4 className="pro-user-username mb-1 font-weight-bold">Klinik Liceria & Co.</h4>
        <h6 className="pro-user-desc text-muted">Pekanbaru, Riau</h6>
        <div className="wideget-user-rating">
          {[...Array(4)].map((_, i) => (
            <i key={i} className="fa fa-star text-warning"></i>
          ))}
          <i className="fa fa-star-o text-warning me-1"></i>
          <span>5 (3876 Patients)</span>
        </div>
        <button onClick={openModal} className="btn btn-success mt-3">
          <i className="fa fa-rss me-2"></i>Edit Profile
        </button>
      </div>
    </div>
  </div>
);

export default ProfileCard;
