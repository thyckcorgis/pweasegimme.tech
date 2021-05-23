import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p className="title slide-in-left">
        If this has made your day better by at least 2%, we have done our job.
      </p>
      <div
        className="headerLine centered slide-in-left"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="img-circle centered flip-in-x"
        style={{ animationDelay: "1s" }}
      >
        <img className="person-img img-circle" src="/corgi.png" alt="corgi" />
        <p className="emoji centered">
          {String.fromCodePoint(0x1f449) + " " + String.fromCodePoint(0x1f448)}
        </p>
      </div>
      <Link href="/with-a-cherry-on-top">
        <div className="button centered">
          <p className="title">If not, click here</p>
        </div>
      </Link>
    </div>
  );
}
