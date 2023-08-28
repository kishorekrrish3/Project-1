/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component = ({ property1, className }) => {
  return (
    <div className={`component ${property1} ${className}`}>
      <div className="frame">
        <div className="overlap-group">
          <div className="div">
            <div className="text-wrapper">Starve</div>
            <div className="text-wrapper-2">Don’t</div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-3">Order .</div>
            <div className="text-wrapper-2">JUST</div>
          </div>
        </div>
      </div>
      <div className="frame-wrapper">
        <div className="div-wrapper">
          <div className="text-wrapper-4">Save your seat</div>
        </div>
      </div>
      <p className="p">
        Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
        Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
        Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra.
      </p>
    </div>
  );
};

Component.propTypes = {
  property1: PropTypes.oneOf(["component-12", "component-13"]),
};
