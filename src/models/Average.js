export default class Average {
    /**
     *
     * @param {array} data for sessions by the user
     */
    constructor(data) {
        this._day = data.day
        this._formatDay = data.day
        this._duration = data.sessionLength
        this._durationWithUnit = data.sessionLength
    }

    get day() {
        return this._day
    }
    get duration() {
        return this._duration
    }

    get durationWithUnit() {
        return `${this._durationWithUnit}min`
    }
    get formatDay() {
        let newDay = ''
        if (this._formatDay === 1) {
            newDay = 'L'
        } else if (this._formatDay === 2) {
            newDay = 'M'
        } else if (this._formatDay === 3) {
            newDay = 'M'
        } else if (this._formatDay === 4) {
            newDay = 'J'
        } else if (this._formatDay === 5) {
            newDay = 'V'
        } else if (this._formatDay === 6) {
            newDay = 'S'
        } else if (this._formatDay === 7) {
            newDay = 'D'
        }
        return newDay
    }
}
