import createUrl from "@/utils/createUrl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useQueryUtil = () => {
  const pathname = usePathname();
  const router = useRouter();
  const query = useSearchParams();

  const updateQueryParams = (value: string, queryName: string = "query") => {
    const newParams = new URLSearchParams();
    newParams.set(queryName, value);
    router.push(createUrl(pathname, newParams));
  };

  const clearQueryParams = () => {
    router.push(pathname);
  };

  const getQueryParams = (toGet: string) => {
    return query.get(toGet);
  };

  return { updateQueryParams, clearQueryParams, getQueryParams };
};

export default useQueryUtil;
