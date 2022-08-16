import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';


const CompleteRegistrationBtn = (props) => {
  return (
    <div >
      <button className="flex justify-center items-center font-poppins text-lg w-full py-2 rounded bg-primary-1 text-white mt-2 text-center"> <AiOutlineCheck className="text-white font-semibold" />{props.label}</button>
    </div>
  );
};

export default CompleteRegistrationBtn;