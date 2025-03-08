import React from "react";
import PropTypes from "prop-types";

export default function Search(props) {
  const { width, height, stroke, ...otherProps } = props;
  return (
    <svg {...otherProps} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.75 15.75L13.1251 13.125M15 8.625C15 12.1458 12.1458 15 8.625 15C5.10418 15 2.25 12.1458 2.25 8.625C2.25 5.10418 5.10418 2.25 8.625 2.25C12.1458 2.25 15 5.10418 15 8.625Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Search.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  stroke: PropTypes.string,
};

Search.defaultProps = {
  width: 18,
  height: 18,
  stroke: "#878C97",
};
