import apiClient from "./client";

const endPoint = "api/v1/persons";

export type User = {
  id: number;
  user_name: string;
  email: string;
  role_id: string;
  employee_id: bigint;
  candidate_id: bigint;
  guest_id: bigint;
  group_id: bigint;
};

export type GetUserResponse = {
  data: User[];
};

const getUsers = (id:any,ManagerId:any) => apiClient.get<any>(`api/v1/persons/Contractor/${id}/${ManagerId}`);

const getUserToken = (data:any) => apiClient.post<any>("/api/Authenticate",data);

const createUser = (data: any) => apiClient.post(endPoint, data);

const editUser = (id: any, data: any) =>
  apiClient.put(`${endPoint}/${id}`, data);

const deleteUser = (id: number) => apiClient.delete(`${endPoint}/${id}`);

const importList = {
  getUsers,
  createUser,
  editUser,
  deleteUser,
  getUserToken
};
export default importList;
