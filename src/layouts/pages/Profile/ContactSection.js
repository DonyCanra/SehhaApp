import React from "react";

const ContactSection = () => {
  const contacts = [
    { icon: "fa-phone", type: "Mobile", value: "+62 345 6789", color: "danger" },
    { icon: "fa-slack", type: "Stack", value: "@liceria.com", color: "warning" },
    { icon: "fa-map", type: "Current Address", value: "Pekanbaru, Riau", color: "info" }
  ];

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Contact</h3>
      </div>
      <div className="card-body">
        <div className="main-profile-contact-list d-lg-flex">
          {contacts.map((contact, index) => (
            <div key={index} className="media me-4">
              <div className={`media-icon bg-${contact.color}-transparent text-${contact.color} me-3 mt-1`}>
                <i className={`fa ${contact.icon}`}></i>
              </div>
              <div className="media-body">
                <small className="text-muted">{contact.type}</small>
                <div className="font-weight-normal1">{contact.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
