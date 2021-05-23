import React, { useState } from "react";
import "../css/custom.css";
import Layout from "@theme/Layout";
// import styles from "./team.module.css";

import clsx from "clsx";

export default function Home() {
  return (
    <Layout
      title="Our Thyck Team"
      description="Meet the people behind Thyck Corgis."
    >
      <section className={styles.person}>
        <div className="container">
          <p className="title text--center slide-in-left">
            Meet the people behind Thyck Corgis.
          </p>
          <div
            className="headerLine centered slide-in-left"
            style={{ animationDelay: "0.5s" }}
          />
          <div style={{ height: "69px" }} />
          <div className="row">
            {TeamList.map((props, idx) => (
              <Team key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
