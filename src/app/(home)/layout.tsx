import { getData } from "@/services/api";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["data"],
    queryFn: getData,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default HomeLayout;
