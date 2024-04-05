"use client"

import Lottie from "lottie-react";
import MapAnimation from "../../../public/map.json";

export function Logo() {
  return (
    <div className="w-14 h-14 rounded-full bg-black/45 flex items-center justify-center">
      <Lottie
        animationData={MapAnimation}
        loop={true}
        style={{
          width: "80%",
          height: "80%",
        }}
      />
    </div>
  );
}
