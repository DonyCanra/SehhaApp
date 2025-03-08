import React from "react";

const IconEdit = ({ size = 20, className = "", onClick }) => (
  <svg onClick={onClick} style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256" className={className}>
    <g fill="#ffcb00" stroke="none">
      <g transform="scale(10.66667,10.66667)">
        <path d="M18.41406,2c-0.25587,0 -0.51203,0.09747 -0.70703,0.29297l-1.70703,1.70703l4,4l1.70703,-1.70703c0.391,-0.391 0.391,-1.02406 0,-1.41406l-2.58594,-2.58594c-0.1955,-0.1955 -0.45116,-0.29297 -0.70703,-0.29297zM14.5,5.5l-11.5,11.5v4h4l11.5,-11.5z"></path>
      </g>
    </g>
  </svg>
);

const IconDelete = ({ size = 20, className = "", onClick }) => (
  <svg onClick={onClick} style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256" className={className}>
    <g fill="#ff0000" stroke="none">
      <g transform="scale(10.66667,10.66667)">
        <path d="M10,2l-1,1h-6v2h18v-2h-6l-1,-1zM4.36523,7l1.52734,13.26367c0.132,0.99 0.98442,1.73633 1.98242,1.73633h8.24805c0.998,0 1.85138,-0.74514 1.98438,-1.74414l1.52734,-13.25586z"></path>
      </g>
    </g>
  </svg>
);

const Icons = {
  Edit: React.memo(IconEdit),
  Delete: React.memo(IconDelete),
};

export default Icons;
