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

export const listRoutes = [
  { _id: "1", code: "dashboard", description: "Go to Dashboard" },
  { _id: "2", code: "registration", description: "Navigate to Registration Page" },
  { _id: "3", code: "emr", description: "Access Electronic Medical Records" },
  { _id: "4", code: "pharmacy", description: "Go to Pharmacy Management" },
  { _id: "5", code: "cashier", description: "Access Cashier Module" },
  { _id: "6", code: "profile", description: "View or Edit User Profile" },
  { _id: "7", code: "setting", description: "Manage Application Settings" },
];
