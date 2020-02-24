import { reduce } from "../reduce/reduce"
import { is, isNothing } from "../is/is"
import { pipe } from "../pipe/pipe"

/**
 * Get value from obj property
 *
 * @param  {string|string[]}  path          Property name or dot path of props
 * @param  {mixed}            defaultValue  Value to return if not found
 * @param  {object}           source        Source object
 *
 * @return {mixed}
 *
 * @tag Object
 * @signature (path: string|string[]) => (source: Object|Array): mixed
 *
 * @example
 * get("lorem")({ lorem: "ipsum" })
 * // => "ipsum"
 *
 * get("not-exist")({ lorem: "ipsum" })
 * // => undefined
 *
 * get("not-exist-with-default", "dolor")({ lorem: "ipsum" })
 * // => "dolor"
 *
 * get(["a", "b"])({ a: { b: "c" } })
 * // => "c"
 *
 * get(["a", "test"])({ a: { b: "c" } })
 * // => undefined
 */
const get = (path, defaultValue) => source => {
  let result = undefined

  if (is(source) && typeof source === "object") {
    result = pipe(
      reduce(
        (acc, item) =>
          is(acc) && typeof acc === "object" ? acc[item] : undefined,
        source
      ),

      // only return default value if it's explicitly set.
      // this way values of "null", "NaN" are not masked
      value => (isNothing(value) && is(defaultValue) ? defaultValue : value)
    )(Array.isArray(path) ? path : [path])
  }

  return isNothing(result) && is(defaultValue) ? defaultValue : result
}

export { get }