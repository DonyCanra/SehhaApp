import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Loader = ({ onFinish, duration }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof duration !== "number" || duration <= 0) {
      console.error("Invalid duration: Must be a positive number");
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      if (onFinish) onFinish();
    }, duration);

    return () => clearTimeout(timer);
  }, [onFinish, duration]);

  return loading ? (
    <div id="global-loader">
      <img src="/assets/images/svgs/loader.svg" alt="loader" />
    </div>
  ) : null;
};

Loader.propTypes = {
  onFinish: PropTypes.func,
  duration: PropTypes.number,
};

Loader.defaultProps = {
  duration: 2000,
  onFinish: () => {},
};

export default Loader;
