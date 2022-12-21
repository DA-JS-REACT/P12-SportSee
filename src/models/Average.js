/**
 * Represents the average-session of User with formated data
 *
 */

export class Average {
    /**
     * @class Create formated data of user sessions-averages
     * @param {Object} data data for sessions by the user
     * @param {Number} data.day
     * @param {Number} data.formatDay
     * @param {Number} data.duration
     */
    constructor(data) {
        this._day = data.day
        this._formatDay = data.formatDay
        this._duration = data.duration
    }

    get day() {
        return this._day
    }
    get duration() {
        return this._duration
    }
    /**
     * @property {function} formatDay  transforms the date into days of the week
     * @return {string}
     */
    get formatDay() {
        const format = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
        let newDay = ''
        for (let i = 0; i < format.length; i++) {
            if (this._formatDay === i + 1) {
                newDay = format[i]
            }
        }

        return newDay
    }
}
