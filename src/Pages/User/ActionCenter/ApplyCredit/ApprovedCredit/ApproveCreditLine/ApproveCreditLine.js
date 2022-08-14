import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import MainLayout from '../../../../../../Layout/MainLayout';

const ApproveCreditLine = () => {
    return (
        <>
            <MainLayout>

                <div className="px-20 py-6 border-b-[3px] border-borderColor">
                    <h3 className="text-2xl font-bold">
                        You have successfuly been approved for a credit line.
                    </h3>
                </div>
                <div className="mt-16 flex w-2/4 mx-auto items-center border-2 border-borderColor rounded-lg bg-green-300">
                    <span className="px-6 py-8  border-r-2 border-borderColor bg-green-400">
                        <RiErrorWarningLine className="text-3xl" />
                    </span>
                    <h3 className="p-4 text-xl bg-green-300">
                        Now you can submit a purchase order.
                    </h3>
                </div>
            </MainLayout>
        </>
    );
};

export default ApproveCreditLine;