import { isObject } from "./helpers";

/**
 * FindKey by key string
 *
 * can use dot notation for deep nested value
 *
 * eg:
 *
 * ```ts
 *import NOM from 'nested-object-mutator'
 *
 * const source = {
 *  a: 1,
 *  b: {
 *    c: 2
 *  }
 *}
 *
 * const result = NOM.getByKey(source, "a.b.c", ".")
 *
 * The result is `2`. return null if not exists.
 *```
 *
 * @param source {object}
 * @param target {string} target key.
 * @param delimiter {string} default delimiter is `.`
 * @returns true if exist
 */
function getByKey(
  source: object,
  target: string,
  delimiter: string = "."
): any {
  const keys: string[] = target
    .split(delimiter)
    .filter((k: string) => k.trim() !== "");

  if (keys.length === 0) {
    return null;
  }

  let cache: any = source;

  for (let index = 0; index < keys.length; index++) {
    const currentKey = keys[index];
    let isKeyExists = false;

    if (isObject(cache)) {
      isKeyExists = Reflect.has(cache, currentKey);
    }

    if (!isKeyExists) {
      cache = null;
      continue;
    }

    const currentValue = Reflect.get(cache, currentKey);
    cache = currentValue;
  }
  return cache;
}

export { getByKey };
