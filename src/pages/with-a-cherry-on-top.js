import React, { useState } from "react";

export default function UwU() {
  return (
    <div>
      <p className="title slide-in-right">
        Now if THIS has made your day better by at least 2%, u r milk.
      </p>
      <div
        className="headerLine centered slide-in-right"
        style={{ animationDelay: "0.5s" }}
      />
      <div className="img-circle centered flip-in-x pulse-n-spin">
        <img className="corgi-img img-circle" src="/corgi2.jpg" alt="corgi" />
      </div>
      <p className="title slide-in-right">NOW GO STUDY</p>
    </div>
  );
}
