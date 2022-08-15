import React from 'react';
import { BsDownload } from 'react-icons/bs';
import Download from '../../../Assets/images/dowanload.svg'
const UiDowanloadButton = (props) => {
    return (
        <div>
             <button className="flex justify-center items-center  font-poppins font-medium text-[#42526E] leading-5 font-[14px] border-2 bg-slate-200 rounded px-2 py-2">
                <img src={Download} className="w-[14px] h-[14px] mr-2 font-semibold"/>
                 {props.label} </button>
        </div>
    );
};

export default UiDowanloadButton;