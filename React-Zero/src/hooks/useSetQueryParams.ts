import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useQueryParams } from 'hooks/useQueryParams';

export type Item = { [key: string]: string | undefined };

export const useSetQueryParams = () => {
  const currentParam = useQueryParams();
  const history = useNavigate();

  return function setQueryParams(newParams: Item, options?: { merge?: boolean }) {
    const mergeParams =
      options && options.merge
        ? {
            ...currentParam,
            ...newParams,
          }
        : newParams;
    history({
      search: queryString.stringify(mergeParams),
    });
  };
};
