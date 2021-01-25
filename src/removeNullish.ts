// @ts-ignore
import { isNullish, iterate } from "./helpers";

/**
 * Do remove nullish
 *
 * @param source Object has nullish or not
 * @param key source's key
 */
function doRemove(source: object, key: string) {
  if (isNullish(Reflect.get(source, key))) {
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
  const result = Object.assign({}, source);
  iterate(result, doRemove);
  return result;
}

export { removeNullish };
