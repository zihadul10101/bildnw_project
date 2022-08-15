import React from 'react';

const UiProgressBar = ({ width }) => {
  const style = {
    width: width,
  }
  return (
    <>
      <div className="w-full h-2 bg-[#F4F5F7] rounded-full mt-3" >
        <div style={style} className="w-1/4 h-full text-center text-xs   bg-[#FFAB00]  rounded-full">
        </div>
      </div>
    </>
  );
};

export default UiProgressBar;