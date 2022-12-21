/**
 * @function random for delivrate custom message in the component Banner
 * @param {Number} min
 * @param {Number} max
 * @returns {Number} random number
 */
export function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
