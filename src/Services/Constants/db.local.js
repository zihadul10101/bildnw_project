
  module.exports.sidebarMenus = [
    {
      label: "Overview",
      active: false,
      to: "/overview",
      name:'overview'
    },
    {
      label: "Action Center",
      active: false,
      to: "/action-center/overview",
      name:'actioncenter'
    },
    {
      label: "Loans",
      active: false,
      to: "/loans/overview",
      name:'loans'
    },
    {
      label: "Billing",
      active: false,
      to: "/billing/statement",
      name:'billing'
    },
  ];
 
  module.exports.navbardb =[
    {
        name:'overview',
        submenu: 
             {
            title: "",
            active: false,
            to: "",
          },
        
      },
    {
        name:'actioncenter',
        submenu: 
        {
            title: "Overview",
            active: false,
            to: "/action-center/overview",
          },
        
      },
    {
        name:'actioncenter',
        submenu: 
        {
            title: "Company info",
            active: false,
            to: "/action-center/company-info",
          },
        
      },
    {
        name:'actioncenter',
        submenu: 
        {
            title: "Apply for credit",
            active: false,
            to: "/action-center/apply-credit",
          },
        
      },
    {
        name:'actioncenter',
        submenu: 
        {
            title: "Purchase",
            active: false,
            to: "/action-center/purchase",
          },
        
      },

      {
        name:'loans',
        submenu: 
        {
            title: "Overview",
            active: false,
            to: "/loans/overview",
          },
        
      },
      {
        name:'loans',
        submenu: 
        {
            title: "Credit line",
            active: false,
            to: "/loans/credit-line",
          },
        
      },
      {
        name:'loans',
        submenu: 
        {
            title: "All loans",
            active: false,
            to: "/loans/all-loans",
          },
        
      },

      {
        name:'billing',
        submenu: 
        {
            title: "Statement",
            active: false,
            to: "/billing/statement",
          },
        
      },
      {
        name:'billing',
        submenu: 
        {
            title: "Payments",
            active: false,
            to: "/billing/payments",
          }, 
        
      },
  ]