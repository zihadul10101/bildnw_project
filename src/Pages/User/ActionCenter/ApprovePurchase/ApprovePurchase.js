import React from 'react';

import { RiErrorWarningLine } from 'react-icons/ri';
import { useSelector } from "react-redux";
import MainLayout from "../../../../Layout/MainLayout";

const ApprovePurchase = () => {
    const { client_details } = useSelector((state) => state.LogInfo);
    return (
        <MainLayout>
              <div className="px-20 py-6 border-b-[3px] border-borderColor">
                <h3 className="text-2xl font-bold">Congratulation! You have successfully purchased your materials.</h3>
            </div>
               <div className="mt-16 flex w-2/4 mx-auto items-center border-2 border-borderColor rounded-lg bg-green-300">
               <span className="px-6 py-8  border-r-2 border-borderColor bg-green-400">
                   <RiErrorWarningLine className="text-3xl" />
               </span>
               <h3 className="p-4 text-xl bg-green-300">
               Please wait for the staff response      
                        </h3>
           </div>
            </MainLayout>
    );
};

export default ApprovePurchase;