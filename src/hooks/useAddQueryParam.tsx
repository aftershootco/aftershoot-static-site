import createUrl from "@/utils/createUrl";
import { usePathname, useRouter } from "next/navigation";

const useAddQueryParam = () => {
  const pathname = usePathname();
  const router = useRouter();

  const updateQueryParams = (value: string, queryName: string = "query") => {
    const newParams = new URLSearchParams();
    newParams.set(queryName, value);
    router.push(createUrl(pathname, newParams));
  };

  return updateQueryParams;
};

export default useAddQueryParam;
