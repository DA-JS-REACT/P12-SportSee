/**
 * Represents the activity of User with formated data
 */

export default class Activity {
    /**
     *
     * @param {array} data data of users in API
     */
    constructor(data) {
        this._date = data.date
        this._day = data.day
        this._kilogram = data.kilogram
        this._calories = data.calories
    }

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
    get day() {
        const day = new Date(this._day)

        return day.getDate()
    }
}
