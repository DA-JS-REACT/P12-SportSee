export default class Average {
    /**
     *
     * @param {array} data for sessions by the user
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
