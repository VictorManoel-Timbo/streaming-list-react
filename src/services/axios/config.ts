import api from "./setup-axios";

const get = async <T>(
  url: string,
  params?: object,
  baseURL?: string,
) => {
  return (await api(baseURL).get<T>(url, { params })).data;
};

export default { get };