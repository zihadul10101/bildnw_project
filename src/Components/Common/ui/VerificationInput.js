import React from "react";

const VerificationInput = (props) => {
  return (
    <div>
      <input onChange={props.onChange} name={props.name}
        className="border-[3px] border-inputBorder w-16 h-20 block my-2 rounded focus:outline-inputBorder px-3 py-3 text-3xl text-center"
      />
    </div>
  );
};

export default VerificationInput;
