function iterate(obj: object, action: Function) {
  Object.keys(obj).forEach((key) => {
    const property = getProperty(obj, key)
    if (isObject(property)) {
      iterate(property, action)
      return
    }
    if (action != null && typeof action === 'function') {
      action(obj, key);
    }
  })
}

function getProperty(o: any, propertyName: string): any {
  return o[propertyName];
}

function isNullish(value: any): boolean {
  return value === undefined || value === null
}

function isObject(value: any): boolean {
  return value === Object(value);
}

function doRemove (source: object, key: string) {
  const property = getProperty(source, key)
  if (isNullish(property)) {
    Reflect.deleteProperty(source, key);
  }
}

/**
 * Remove Nullish value.
 *
 * nullish : undefined, null
 *
 * @returns Object
 */
function removeNullish(source: object) {
  const result = Object.assign({}, source)
  iterate(result, doRemove)
  return result
}

export { removeNullish }