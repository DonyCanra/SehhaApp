import API from "./api";

export const getRole = async (hospitalId) => {
  console.log(hospitalId, "<<< hospitalId");
  const response = await API.get(`api/roles/${hospitalId}`);
  return response.data;
};
