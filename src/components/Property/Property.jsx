/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Property = ({ className }) => {
  return (
    <div className={`property ${className}`}>
      <div className="overlap">
        <div className="text-wrapper-5">Email</div>
      </div>
      <div className="overlap-group-2">
        <div className="text-wrapper-6">Instagram ID</div>
      </div>
      <div className="overlap-2">
        <div className="text-wrapper-5">Phone</div>
      </div>
      <div className="frame-3">
        <div className="frame-4">
          <div className="text-wrapper-7">SUBSCRIBE</div>
        </div>
      </div>
    </div>
  );
};
