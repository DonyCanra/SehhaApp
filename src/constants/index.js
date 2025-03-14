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
  // Pharmacy
  { _id: "4", code: "pharmacy", description: "Go to Pharmacy Management", path: "/pharmacy" },
  { _id: "5", code: "medicine", description: "Medicine", path: "/pharmacy?tab=medicine&addMedicine=true" },
  { _id: "6", code: "custom medicine", description: "Custom Medicine", path: "/pharmacy?tab=custom-medicine" },
  { _id: "7", code: "medicine package", description: "Medicine Package", path: "/pharmacy?tab=medicine-package" },
  { _id: "8", code: "add medicine", description: "Add Medicine", path: "/pharmacy?tab=medicine&addMedicine=true" },
  { _id: "9", code: "add custom medicine", description: "Add Custom Medicine", path: "/pharmacy?tab=custom-medicine&addCustomMedicine=true" },
  { _id: "10", code: "add medicine package", description: "Add Medicine Package", path: "/pharmacy?tab=medicine-package&addMedicinePackage=true" },
  // Cashier
  { _id: "11", code: "cashier", description: "Access Cashier Module", path: "/cashier" },
  { _id: "12", code: "profile", description: "View or Edit User Profile", path: "/profile" },
  // Settings
  { _id: "13", code: "setting", description: "Manage Application Settings", path: "/setting" },
  { _id: "14", code: "user management", description: "Manage User Permissions", path: "/setting?tab=user-management" },
  { _id: "15", code: "role management", description: "Manage Roles Permissions", path: "/setting?tab=role-management" },
  { _id: "16", code: "add role management", description: "Manage User Roles and Permissions", path: "/setting?tab=role-management&addRole=true" },
  { _id: "17", code: "add patient", description: "Add Patient", path: "/registration?&addPatient=true" },
];
