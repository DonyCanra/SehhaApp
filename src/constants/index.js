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
  { _id: "1", code: "dashboard", description: "Go to Dashboard", path: "/" },
  { _id: "2", code: "registration", description: "Navigate to Registration Page", path: "/registration" },
  { _id: "3", code: "emr", description: "Access Electronic Medical Records", path: "/emr" },
  { _id: "4", code: "pharmacy", description: "Go to Pharmacy Management", path: "/pharmacy" },
  { _id: "5", code: "cashier", description: "Access Cashier Module", path: "/cashier" },
  { _id: "6", code: "profile", description: "View or Edit User Profile", path: "/profile" },
  { _id: "7", code: "setting", description: "Manage Application Settings", path: "/setting" },
  { _id: "8", code: "user management", description: "Manage User Permissions", path: "/setting?tab=user-management" },
  { _id: "9", code: "role management", description: "Manage Roles Permissions", path: "/setting?tab=role-management" },
  { _id: "10", code: "add role management", description: "Manage User Roles and Permissions", path: "/setting?tab=role-management&addRole=true" },
  { _id: "11", code: "add patient", description: "Add Patient", path: "/registration?&addPatient=true" },
];
