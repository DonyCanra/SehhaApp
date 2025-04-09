import API from "./api";

export const getRoleByHospitalID = async (hospitalId) => {
  const response = await API.get(`api/roles/${hospitalId}`);
  return response.data;
};

export const getUserByHospitalID = async (hospitalId) => {
  const response = await API.get(`api/users/${hospitalId}`);
  return response.data;
};
