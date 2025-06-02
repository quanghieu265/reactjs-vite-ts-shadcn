/**
 * Function convert object {abc: 1, abc1: {a:1}} => {abc: 'abc', abc1: {a: 'abc1.c'}}
 * @param obj
 * @param parentKey
 * @returns
 */
function convertObjectDefLocale<T>(obj: T, parentKey = ''): T {
  const result: any = {};
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      result[key] = convertObjectDefLocale(obj[key], `${parentKey}${key}.`);
    } else {
      result[key] = `${parentKey}${key}`;
    }
  }
  return result as T;
}

/*
 * Function parse value
 * @param storageKey
 * @returns
 */
const parseSafely = (value: string) => {
  try {
    return JSON.parse(value);
  } catch (e) {
    return null;
  }
};

/**
 * Function get value form local storage
 * @param storageKey
 * @returns
 */
const getValueFromStorage = (storageKey: string) => {
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
const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};

export default {
  func: {
    convertObjectDefLocale,
    parseSafely,
    getValueFromStorage,
    classNames,
  },
};
