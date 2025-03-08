import React from "react";

const PersonalDetails = () => {
  const details = [
    { label: "Name", value: "Klinik Liceria & Co." },
    { label: "Location", value: "Pekanbaru, Riau" },
    { label: "Nationality", value: "English, Indonesian" },
    { label: "Website", value: "liceria.com" },
    { label: "Email", value: "liceria@gmail.com" },
    { label: "Phone", value: "+62 345 6789" }
  ];

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Personal Details</h3>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered mb-0">
            <tbody>
              {details.map((item, index) => (
                <tr key={index}>
                  <td><span className="font-weight-semibold">{item.label}</span></td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
