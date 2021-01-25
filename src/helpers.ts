/**
 * Iterate deep nested keys
 *
 * @param source: object
 * @param action: Function If property is not object, do Action
 */
function iterate(source: object, action: Function): void {
  Object.keys(source).forEach(key => {
    const property = Reflect.get(source, key);
    if (isObject(property)) {
      iterate(property, action);
      return;
    }
    action(source, key);
  });
}

/**
 * Check parameter is nullish
 *
 * @param value
 * @returns boolean If return true value is nullish
 */
function isNullish(value: any): boolean {
  return value === undefined || value === null;
}

/**
 * Check parameter is Object
 *
 * @param value
 * @returns boolean If return true value is Object
 */
function isObject(value: any): boolean {
  return value === Object(value);
}

export { iterate, isNullish, isObject };
