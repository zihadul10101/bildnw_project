import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layout/MainLayout";

import { useSelector, useDispatch } from "react-redux";
import { ActionOrderPurchases } from "../../../../Services/Actions/ActionCenterActions/ApplyCreditAction";
import UiArrowButton from "../../../../Components/Common/ui/UiArrowButton";
import UiInput from "../../../../Components/Common/ui/UiInput";
const OrderPurchase = () => {
  const [allTextInput, setAllTextInput] = useState({});
  const { client_details } = useSelector((state) => state.LogInfo);
  const clientDetails = client_details.client_details;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { purchase_project_details } = useSelector(
    (state) => state.ApplyCredit
  );
  const { order_purchase_data } = useSelector((state) => state.ApplyCredit);

  const handleTextInput = (event) => {
    let files = event.target.files[0];
    const { name } = event.target;
    setAllTextInput(() => ({
      ...allTextInput,
      [name]: files,
    }));
  };
  const orderPurchase = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('order_address', allTextInput.order_address)

    formData.append('material_description',  purchase_project_details.material_description)
    formData.append('total_amount', purchase_project_details.total_amount)
    formData.append('supplier_name', purchase_project_details.supplier_name)
    formData.append('iban', purchase_project_details.iban)
    formData.append('status', purchase_project_details.status)
    formData.append('quote_file', purchase_project_details.quote_file)
    dispatch(ActionOrderPurchases(formData, clientDetails.id, navigate));
  };
  return (
    <MainLayout>
      <div className="px-20 py-6 border-b-[3px] border-borderColor">
        <h3 className="text-2xl font-bold">Sign the purchase order.</h3>
      </div>
      <div className="grid grid-rows-10 space-y-10 px-20 py-6">
        <div className="col-span-6 w-2/4 mx-auto">
          <div className="w-full h-96 overflow-y-scroll border-4 rounded-lg">
            <p className="text-justify p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
              Officiis iure rerum voluptates a cumque velit quibusdam sed amet
              tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
              temporibus enim commodi iusto libero magni deleniti quod quam
              consequuntur! Commodi minima excepturi repudiandae velit hic
              maxime doloremque. Quaerat provident commodi consectetur veniam
              similique ad earum omnis ipsum saepe, voluptas, hic voluptates
              pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
              excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
              Voluptatem quaerat non architecto ab laudantium modi minima sunt
              esse temporibus sint culpa, recusandae aliquam numquam totam
              ratione voluptas quod exercitationem fuga. Possimus quis earum
              veniam quasi aliquam eligendi, placeat qui corporis!
            </p>
          </div>
        </div>
        <form onSubmit={orderPurchase} className="col-span-6 w-2/4 mx-auto">
          <UiInput
            label="Upload your purchase order addressed to bildnw here."
            name="order_address"
            type="file"
            onChange={handleTextInput}
          ></UiInput>
          <div className="mx-44 mt-5">
            <UiArrowButton label="Purchase" />
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default OrderPurchase;
