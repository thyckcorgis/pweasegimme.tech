import React, { useState } from "react";
import Router from "next/router";
import Header from "../components/Header";
import Image from "next/image";

export const BASE_PATH = "/pwetty-pwease-study";

const AuthUser = {
  email: "corgi@thyck.top",
  displayName: " Corgi",
  signOut: () => {},
};

const Home = () => {
  const [disabled, setDisabled] = useState(false);
  const handler = () => {
    setDisabled(true);
    Router.push("/with-a-cherry-on-top");
  };
  return (
    <div className="container">
      <Header />
      {AuthUser.displayName
        ? (
          <p className="title slide-in-left">
            Hewwo, {AuthUser.displayName.split(" ")[0]}
          </p>
        )
        : null}
      <p className="title slide-in-left" style={{ animationDelay: "0.5s" }}>
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
        <Image
          className="corgi-img img-circle"
          alt="corgi"
          src={`${BASE_PATH}/corgi.png`}
          width={200}
          height={200}
        />
        <p className="emoji centered">
          {String.fromCodePoint(0x1f449) + " " + String.fromCodePoint(0x1f448)}
        </p>
      </div>
      <div className="pls-center">
        <button
          className="button centered title"
          onClick={handler}
          disabled={disabled}
        >
          If not, click here
        </button>
      </div>
    </div>
  );
};

export default Home;
