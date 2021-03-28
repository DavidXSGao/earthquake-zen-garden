import moment from "moment-timezone";
import { REGEX_PARTS, REGEX_DIGIT } from "./../constants/constants";

/**
 * converts a number into its corresponding String representation in the vancouver timezone using the moment package
 * e.g. 1523647508250 -> "Apr 13, 2018, 03:25 PM"
 * @param {Number} time number of milliseconds that have elapsed since midnight on January 1, 1970, UTC
 */
export function formatTimeToDate(time) {
  const mom = moment(new Date(parseInt(time))).tz("America/Vancouver");
  return mom.isValid() ? mom.format("MMM DD, YYYY, hh:mm A") : "";
}

/**
 * Credits to https://cwestblog.com/2013/04/10/javascript-comparing-and-sorting-strings-with-numbers/ for coming up with the algorithm
 *
 * compares two strings with a number possibly in either strings for an array sort function
 *
 * @param {String} a first value to compare
 * @param {String} b second value to compare
 * @param {Boolean} asc whether the sort direction is asc
 */
export function cmpStringsWithNumbers(a, b, asc) {
  // Get rid of casing issues.
  a = a.toUpperCase();
  b = b.toUpperCase();

  // Separates the strings into substrings that have only digits and those
  // that have no digits.
  var aParts = a.match(REGEX_PARTS);
  var bParts = b.match(REGEX_PARTS);

  // Used to determine if aPart and bPart are digits.
  var isDigitPart;

  // If `a` and `b` are strings with substring parts that match...
  if (
    aParts &&
    bParts &&
    (isDigitPart = REGEX_DIGIT.test(aParts[0])) == REGEX_DIGIT.test(bParts[0])
  ) {
    // Loop through each substring part to compare the overall strings.
    var len = Math.min(aParts.length, bParts.length);
    for (var i = 0; i < len; i++) {
      var aPart = aParts[i];
      var bPart = bParts[i];

      // If comparing digits, convert them to numbers (assuming base 10).
      if (isDigitPart) {
        aPart = parseInt(aPart, 10);
        bPart = parseInt(bPart, 10);
      }

      // If the substrings aren't equal, return either -1 or 1.
      if (aPart != bPart) {
        return asc ? (aPart < bPart ? -1 : 1) : aPart > bPart ? -1 : 1;
      }

      // Toggle the value of isDigitPart since the parts will alternate.
      isDigitPart = !isDigitPart;
    }
  }

  // Use normal comparison.
  return asc ? (a >= b) - (a <= b) : (a <= b) - (a >= b);
}

/**
 * compares two values for an array sort function
 *
 * @param {*} a first value to compare
 * @param {*} b second value to compare
 * @param {Boolean} asc whether the sort direction is asc
 */
export function cmpArrayValues(a, b, asc) {
  if (typeof a === "string" || a instanceof String) {
    return cmpStringsWithNumbers(a, b, asc);
  } else {
    if (asc) {
      return a > b ? 1 : -1;
    } else {
      return a < b ? 1 : -1;
    }
  }
}
