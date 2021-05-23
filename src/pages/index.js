import React, { useState } from "react";
import { useAuthUser, withAuthUser } from "next-firebase-auth";
import Link from "next/link";

const Home = () => {
  const AuthUser = useAuthUser();
  return (
    <div>
      {AuthUser.email ? (
        <button onClick={AuthUser.signOut}>Sign out</button>
      ) : (
        <Link href="/auth">Sign in</Link>
      )}
      {AuthUser.displayName ? (
        <p className="title slide-in-left">
          Hello, {AuthUser.displayName.split(" ")[0]}
        </p>
      ) : null}
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
        <img className="corgi-img img-circle" src="/corgi.png" alt="corgi" />
        <p className="emoji centered">
          {String.fromCodePoint(0x1f449) + " " + String.fromCodePoint(0x1f448)}
        </p>
      </div>
      <div
        className="button centered title"
        // style={{ animationDelay: "1.5s" }}
      >
        <Link href="/with-a-cherry-on-top">If not, click here</Link>
      </div>
    </div>
  );
};

export default withAuthUser()(Home);
