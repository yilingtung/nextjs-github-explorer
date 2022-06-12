import { useRouter } from 'next/router';
import { useMemo } from 'react';

// different with the query from next useRouter
// const { query } = useRouter();
// useNextQueryParams not includer path params
const useNextQueryParams = (): { [key: string]: string } => {
  const router = useRouter();
  const value = useMemo(() => {
    // @see https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
    const queryParamsStr = router.asPath.split('?').slice(1).join('');
    const urlSearchParams = new URLSearchParams(queryParamsStr);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params;
  }, [router.asPath]);

  return value;
};

export default useNextQueryParams;
