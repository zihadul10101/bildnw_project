import React from 'react';
import { BsDownload } from 'react-icons/bs';

const UiDowanloadButton = (props) => {
    return (
        <div>
             <button className="flex justify-center items-center  ml-5 border-2 bg-slate-200 rounded px-2 py-2 text-slate  "> <BsDownload className="text-slate-500 mr-2 font-semibold" />  {props.label} </button>
        </div>
    );
};

export default UiDowanloadButton;