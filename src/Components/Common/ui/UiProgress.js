import React from "react";

const UiProgress = ({ status, bgcolor, width }) => {
  const style = {
    width: width,
  };
  return (
    <>
      <div className="w-full bg-gray-200 h-6">
        <div
          className={`${bgcolor} h-6  text-white text-xs px-2 py-1 rounded`}
          style={style}
        >
          {" "}
          STATUS: {status}
        </div>
      </div>
    </>
  );
};

export default UiProgress;
