import { Suspense } from 'react';

/**
 * Function convert object {abc: 1, abc1: {a:1}} => {abc: 'abc', abc1: {a: 'abc1.c'}}
 * @param obj
 * @param parentKey
 * @returns
 */
export function convertObjectDefLocale<T extends Record<string, unknown>>(obj: T, parentKey = ''): T {
  const result: Record<string, unknown> = {};
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      result[key] = convertObjectDefLocale(obj[key] as Record<string, unknown>, `${parentKey}${key}.`);
    } else {
      result[key] = `${parentKey}${key}`;
    }
  }
  return result as T;
}

/*
 * Function parse value
 * @param value
 * @returns
 */
export const parseSafely = (value: string): unknown => {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

/**
 * Function get value from local storage
 * @param storageKey
 * @returns
 */
export const getValueFromStorage = (storageKey: string): unknown => {
  const value = localStorage.getItem(storageKey);
  if (!value) {
    return null;
  }
  return parseSafely(value);
};

/**
 * Function return value for attribute className
 * @param classes
 * @returns
 */
export const cn = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};

export function withSuspense(
  Component: React.ComponentType<any>
) {
  return <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
}

export function convertObjToEnum<T>(object: T): T {
  return Object.freeze(object);
}

export function buildPath(path: string, query: Record<string, string | number | boolean | undefined>): string {
  const params = new URLSearchParams();

  for (const key in query) {
    const value = query[key];
    if (value !== undefined && value !== null && value !== "") {
      params.append(key, value.toString());
    }
  }

  const queryString = params.toString();
  return queryString ? `${path}?${queryString}` : path;
}
