import React from "react";

export default function Pins(props) {
  return (
    <div
      className={`bg-primary animate-fade-in-up`}
      style={{
        ...styles.pin,
        ...styles[props.size],
        animationDelay: `${props.index * 100}ms`,
        animationFillMode: "both",
      }}
    >
      <img
        src={`/images/generations/${props.imageName}.png`}
        alt={props.imageName}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
}

const styles = {
  pin: {
    margin: "5px",
    padding: 0,
    borderRadius: "10px",
    animationDuration: "600ms",
  },
  small: {
    gridRowEnd: "span 15",
  },
  medium: {
    gridRowEnd: "span 20",
  },
  large: {
    gridRowEnd: "span 25",
  },
};
