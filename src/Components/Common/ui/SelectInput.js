import React from "react";

const SelectInput = (props) => {
  return (
    <div>
      <label htmlFor={props.name} className="block pt-2 text-lg">
        {props.label}
      </label>
      <select name="companyType" onChange={props.onChange} id="companyType" className="border-0 text-[#7A869A] text-sm font-poppins font-normal w-full block my-1 focus:outline-inputBorder p-2 text-lg bg-[#F4F5F7] rounded-sm">
        <option disabled selected >Choose something</option>
        <option value="Contractor">Contractor</option>
        <option value="Trader">Trader</option>
        <option value="Manufacturer">Manufacturer</option>
      </select>
    </div>
  );
};

export default SelectInput;
