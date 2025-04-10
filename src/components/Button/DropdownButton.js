import React, { useEffect, useRef, useState } from "react";

const DropdownButton = ({ options = [], defaultLabel = "Select...", onSelect = () => {}, icon, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultLabel);
  const buttonRef = useRef();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (label) => {
    setSelected(label);
    onSelect(label); // trigger ke parent
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <button ref={buttonRef} type="button" className={`btn btn-primary btn-pill position-relative ${className}`} onClick={toggleDropdown} aria-haspopup="true" aria-expanded={isOpen}>
      {icon && <span className="me-2">{icon}</span>}
      {selected}
      <span className="ms-2">
        <i className={`fe ${isOpen ? "fe-chevron-up" : "fe-chevron-down"}`}></i>
      </span>

      {isOpen && (
        <div
          className="dropdown-menu show border-0 mt-1"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            zIndex: 1000,
            minWidth: "max-content",
          }}
        >
          {options.map((option) => (
            <button key={option} className={`dropdown-item w-100 text-start ${selected === option ? "active" : ""}`} onClick={() => handleSelect(option)} type="button">
              {option}
            </button>
          ))}
        </div>
      )}
    </button>
  );
};

export default DropdownButton;
