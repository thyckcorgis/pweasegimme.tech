import Header from "../components/Header";
import Image from "next/image";

import { BASE_PATH } from "./index";

export default function UwU() {
  return (
    <div className="container">
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
        <Image
          className="corgi-img img-circle"
          src={`${BASE_PATH}/corgi2.jpg`}
          alt="corgi"
          width={200}
          height={200}
        />
      </div>
      <p className="title slide-in-right">Pwetty pwease study?</p>
    </div>
  );
}
