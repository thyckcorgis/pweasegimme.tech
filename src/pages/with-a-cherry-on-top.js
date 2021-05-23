import React, { useState, useEffect } from "react";
import Header from "../components/Header";

export default function UwU() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("/api/get-count")
      .then((res) => res.json())
      .then(({ count }) => {
        setCount(count);
      });
  }, []);

  return (
    <div>
      <Header />
      <p className="title slide-in-right">
        Now if THIS has made your day better by at least 2%, u r milk.
      </p>
      <div
        className="headerLine centered slide-in-right"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="img-circle centered flip-in-x pulse-n-spin"
        style={{ animationDelay: "1s" }}
      >
        <img className="corgi-img img-circle" src="/corgi2.jpg" alt="corgi" />
      </div>
      <p className="title slide-in-right">
        {count
          ? `${count} people have clicked the button so far, including you!`
          : ""}
      </p>
      <p className="title slide-in-right">Pwetty pwease study?</p>
    </div>
  );
}
