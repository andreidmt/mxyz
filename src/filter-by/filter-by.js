const filter = require("../filter/filter")
const isMatch = require("../is-match/is-match")

/**
 * Filter an array of objects
 *
 * @param   {Object}    matchObject  Match object
 * @param   {Object[]}  source       Source input
 *
 * @return  {Object[]}
 *
 * @tag Array
 * @signature (matchObject: Object) => (source: Object[]): Object[]
 *
 * @example { example }
 * filterBy( { "!id": 2 } )( [
 *   { lorem: 2 },
 *   { lorem: 3 },
 *   { id: 2 }
 * ] )
 * // [
 * // { lorem: 2 },
 * // { lorem: 3 }
 * // ]
 *
 * filterBy( { "items": 2 } )( [
 *   { id: 2, items: 2 }
 *   { id: 3, items: 1 }
 *   { id: 4, items: 2 }
 * ] )
 * // [
 * // { id: 2, items: 2 },
 * // { id: 4, items: 2 }
 * // ]
 */
module.exports = matchObject => filter(isMatch(matchObject))