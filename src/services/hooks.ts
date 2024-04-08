import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getData, postData } from "./api";

export const useData = () => {
  return useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });
};

export const useUpdateData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => postData(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["data"] }),
  });
};
