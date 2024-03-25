import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://10.255.255.247:9000/api",
});

export default apiClient;
