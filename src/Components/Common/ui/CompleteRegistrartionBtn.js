import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';


const CompleteRegistrationBtn = (props) => {
  return (
    <div >
      <button className="flex justify-center items-center  text-lg px-44 py-2 rounded bg-primary-1 text-white mt-2 text-center"> <AiOutlineCheck className="text-white font-semibold" />{props.label}</button>
    </div>
  );
};

export default CompleteRegistrationBtn;