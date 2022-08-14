import React from 'react';

const UiProgressBar = ({ width }) => {
  const style = {
    width: width,
  }
  return (
    <>
      <div className="w-full h-2 bg-[#FF8B00] rounded-full mt-3" style={style}>
        <div className="w-1/4 h-full text-center text-xs  text-white bg-progress-1 rounded-full">
        </div>
      </div>
    </>
  );
};

export default UiProgressBar;