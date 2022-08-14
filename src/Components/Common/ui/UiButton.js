import React from "react";

const UiButton = (props) => {
  return (
    <div>
      <button className="text-lg px-8 py-2 rounded bg-primary-1 text-white">
        {props.label}
      </button>
    </div>
  );
};

export default UiButton;
