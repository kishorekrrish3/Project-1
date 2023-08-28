import React from "react";
import { Component } from "../../components/Component";
import { Property } from "../../components/Property";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div-2">
        <div className="frame-5">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-3">
              <img className="vector" alt="Vector" src="/img/vector-27.svg" />
              <img className="img" alt="Vector" src="/img/vector-30.svg" />
              <img className="vector-2" alt="Vector" src="/img/vector-29.svg" />
              <div className="text-wrapper-8">Bisine</div>
              <img className="frame-6" alt="Frame" src="/img/frame-194.svg" />
              <img className="frame-7" alt="Frame" src="/img/frame-195.svg" />
            </div>
          </div>
          <Component className="component-14" property1="component-12" />
        </div>
        <div className="page">
          <div className="overlap-3">
            <div className="frame-8">
              <div className="overlap-group-4">
                <div className="text-wrapper-9">about</div>
                <img className="line" alt="Line" src="/img/line-18.svg" />
              </div>
            </div>
            <p className="text-wrapper-10">
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
              tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
              sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
              scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
              bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
            </p>
            <Property className="property-variant" />
          </div>
        </div>
      </div>
    </div>
  );
};
