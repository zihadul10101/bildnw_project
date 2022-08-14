import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-800 w-full py-3 border-2">
        <div className="max-w-screen-xl mx-auto px-4">
          <ul className="max-w-screen-md text-lg font-light flex flex-wrap">
            <li className="my-2 ml-20 text-primary-3 font-poppins font-[12px] font-normal font-xs">
              All right reserved, Bildnw 2022©
             
            </li>
            <li className="my-2 ml-48">
              <a className="text-primary-3 font-normal font-poppins font-[12px] font-xs" href=" #">
                Footer Link
              </a>
            </li>
            <li className="my-2 ml-16">
              <a className="text-primary-3 font-normal font-poppins font-[12px] font-xs" href=" #">
                Footer Link
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer