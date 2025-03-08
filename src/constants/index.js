// Data menu yang lebih dinamis
export const menuItems = [
    { category: "Home", items: [{ name: "Dashboard", icon: "Dashboard", path: "/" }] },
    {
      category: "Features",
      items: [
        { name: "Registration", icon: "Registration", path: "/registration" },
        { name: "EMR", icon: "EMR", path: "/emr" },
        { name: "Pharmacy", icon: "Pharmacy", path: "/pharmacy" },
        { name: "Cashier", icon: "Cashier", path: "/cashier" },
      ],
    },
    {
      category: "Hospital",
      items: [
        { name: "Profile", icon: "Profile", path: "/profile" },
        { name: "General Setting", icon: "Setting", path: "/setting" },
      ],
    },
  ];
  
  export const bpjsMenu = {
    category: "BPJS",
    items: [
      { name: "PCare", icon: "Pcare", path: "/pcare" },
      { name: "VClaim", icon: "Vclaim", path: "/vclaim" },
    ],
  };
  