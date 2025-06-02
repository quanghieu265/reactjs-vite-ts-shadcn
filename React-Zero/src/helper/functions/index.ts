/**
 * Function convert object to Enum
 * @param object
 * @returns
 */
function convertObjToEnum<T>(object: T): T {
  return Object.freeze(object);
}

export default {
  func: {
    convertObjToEnum,
  },
};
