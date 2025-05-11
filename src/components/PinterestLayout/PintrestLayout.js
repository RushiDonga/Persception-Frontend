import React from "react";
import Pins from "./Pins";
import { generations } from "../../data/generations";

export default function PinterestLayout() {
  const pinSize = ["small", "medium", "large"];

  const getSizeIndex = (index) => {
    return pinSize[index % 3];
  };

  return (
    <div className="bg-gray-900">
      <h1 className="py-6 px-4 bg-gray-900 text-center text-white font-bold text-xl sm:text-2xl md:text-4xl">
        Art begins with a <span className="text-primary">prompt!</span>
      </h1>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={styles.pin_container}>
        {generations.map((item, index) => (
          <Pins key={index} size={getSizeIndex(index)} imageName={item.imageName} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  pin_container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 250px)",
    gridAutoRows: "10px",
    justifyContent: "center",
    gap: "10px",
  },
};
