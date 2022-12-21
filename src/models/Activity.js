/**
 * Class Represents the activity of User with formated data
 */

export class Activity {
    /**
     * @class Create formated data of user activity
     * @param {Object} data data of users in API
     * @param {String} data.date
     * @param {String} data.day
     * @param {Number} data.kilogram
     * @param {Number} data.calories
     */
    constructor(data) {
        this._date = data.date
        this._day = data.day
        this._kilogram = data.kilogram
        this._calories = data.calories
    }
    /**
     *
     */
    get date() {
        const newDate = new Date(this._date)
        return newDate
    }
    get kilogram() {
        return this._kilogram
    }
    get calories() {
        return this._calories
    }
    /**
     * @property {function} day retrieves the day of the date
     * @return {Number} day
     */
    get day() {
        const day = new Date(this._day)
        return day.getDate()
    }
}
