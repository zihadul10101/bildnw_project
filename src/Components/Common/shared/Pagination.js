import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { useTranslation } from 'react-i18next';

const Pagination = () => {
  // for language implementation
  const {t} = useTranslation();

  return (
    <div className=" ">
      <div className="flex justify-around  items-center gap-4 ">

        <span className="text-sm text-gray-700 dark:text-gray-400">
          {t('showing')} <span className="font-semibold text-gray-900 dark:text-white">1</span> {t('to')} <span className="font-semibold text-gray-900 dark:text-white">10</span> {t('of')} <span className="font-semibold text-gray-900 dark:text-white">100</span> {t('entries')}
        </span>
        <div className="inline-flex mt-2 xs:mt-0">

          <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <BsChevronLeft />
            {t('prev')}
          </button>
          <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            {t('next')}
            <BsChevronRight />
          </button>
        </div>
      </div>
    </div>

  );
};

export default Pagination;