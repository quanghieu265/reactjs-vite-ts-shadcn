import * as React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

export const useQueryParams = <
  Params extends { [key: string]: string | string[] | undefined } = {
    [key: string]: string | undefined;
  }
>() => {
  const location = useLocation();
  const params = React.useMemo(() => queryString.parse(location.search), [location.search]);

  return params as Params;
};
