import { useState } from "react";

const useApi = (apiFunc: any) => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args: any) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);
    setError(response.error);
    setData(response.data);
    return response;
  };

  return { data, error, loading, request };
};

export default useApi;
