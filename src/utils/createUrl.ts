const createUrl = (pathName: string, params: URLSearchParams) => {
  return `${pathName}?${params}`;
};

export default createUrl;
