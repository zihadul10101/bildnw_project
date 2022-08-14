  // Function to handle the status and its link
  export const StatusHandle = (statusCode, callback) => {
    if(statusCode === 2){
      callback({
        status : 'registered',
        next_step : 'fill_in_required_info',
        link : `/action-center/company-info`,
      })
    }
    
    else if (statusCode === 4){
      callback({
        status : 'information_complete',
        next_step : 'awaiting_for_admin_validation',
        link : `#`
      })
    }
    else if (statusCode === 5){
      callback({
        status : 'Pre-approved',
        next_step : 'Request a credit line',
        link : `/action-center/apply-credit`
      })
    }
    else if (statusCode === 8){
      callback({
        status : 'creditline_request_submitted',
        next_step : 'awaiting_staff_decision',
        link : `#`
      })
    }
    else if (statusCode === 9){
      callback({
        status : 'creditline_offered',
        next_step : 'accept_offer',
        link : `/action-center/apply-credit`
      })
    }
    else if (statusCode === 12){
      callback({
        status : 'creditline_approved',
        next_step : 'request_purchase',
        link : `/action-center/purchase`
      })
    }
    else if (statusCode === 14){
      callback({
        status : 'purchase_received',
        next_step : 'purchase_processing',
        link : `#`
      })
    }
    else if (statusCode === 15){
      callback({
        status : 'purchase_complete',
        next_step : 'upload_delivery_note',
        link : `/action-center/overview`
      })
    }
    else if (statusCode === 16){
      callback({
        status : 'loan_outstanding',
        next_step : 'submit_another_purchase',
        link : `#`
      })
    }
    else if (statusCode === 17){
      callback({
        status : 'awaiting_loan_repayment',
        next_step : 'repay_loan_now',
        link : `#`
      })
    }

  }

  export const statusDetails = statusId => {
    let status = {}

    switch (statusId) {
      case 2:
        status = {
          status : 'registered',
          next_step : 'fill_in_required_info',
          color: [52, 175, 247],
          link : `/action-center/company-info`,
        }
        break;
      case 4:
        status = {
          status : 'information_complete',
          next_step : 'awaiting_for_admin_validation',
          color: [255, 82, 82],
          link : `#`
        }
        break;
      case 5:
        status = {
          status : 'Pre-approved',
          next_step : 'Request a credit line',
          color: [52, 175, 247],
          link : `/action-center/apply-credit`
        }
        break;
      case 8:
        status = {
          status : 'creditline_request_submitted',
          next_step : 'awaiting_staff_decision',
          color: [255, 82, 82],
          link : `#`
        }
        break;
      case 9:
        status = {
          status : 'creditline_offered',
          next_step : 'accept_offer',
          color: [52, 175, 247],
          link : `/action-center/apply-credit`
        }
        break;
      case 12:
        status = {
          status : 'creditline_approved',
          next_step : 'request_purchase',
          color: [52, 175, 247],
          link : `/action-center/purchase`
        }
        break;
      case 14:
        status = {
          status : 'purchase_received',
          next_step : 'purchase_processing',
          color: [255, 82, 82],
          link : `#`
        }
        break;
      case 15:
        status = {
          status : 'purchase_complete',
          next_step : 'upload_delivery_note',
          color: [52, 175, 247],
          link : `/action-center/overview`
        }
        break;
      case 16:
        status = {
          status : 'loan_outstanding',
          next_step : 'submit_another_purchase',
          color: [52, 175, 247],
          link : `#`
        }
        break;  
      case 17:
        status = {
          status : 'awaiting_loan_repayment',
          next_step : 'repay_loan_now',
          color: [255, 82, 82],
          link : `#`
        }
        break;
      
      default:
        status = {
          status: 'No status',
          next_step : 'No status',
          link : '#'  
       }
  }
  return status
}
