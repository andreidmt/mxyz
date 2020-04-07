/**
 * Test if something is not `null` or `undefined`
 *
 * @tag Core
 * @signature is(source): boolean
 *
 * @param {any} source Source variable
 *
 * @return {boolean}
 *
 * @example
 *
 * is(null)      // => false
 * is(0)         // => true
 * is(undefined) // => false
 * is("")        // => true
 * is(false)     // => true
 * is(NaN)       // => false
 */
const is = source =>
  source !== null && source !== undefined && !Number.isNaN(source)

const isNothing = source =>
  source === null || source === undefined || Number.isNaN(source)

const isObject = source =>
  source !== null && typeof source === "object" && !Array.isArray(source)

const isTrue = source => source === true

const isFalse = source => source === false

const not = fn => source => !fn(source)

export { is, not, isNothing, isTrue, isFalse, isObject }
