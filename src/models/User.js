/**
 * Represents the User with formated data
 */

export default class User {
    /**
     *
     * @param {Object} data  data of users in API
     */
    constructor(data) {
        this._firstName = data.firstname
        this._keyData = data.keyData
        this._calories = data.calories
        this._proteines = data.proteines
        this._glucides = data.glucides
        this._lipides = data.lipides
        this._score = data.score
    }

    get firstName() {
        let name = this._firstName[0].toUpperCase() + this._firstName.slice(1)
        return name
    }
    get keyData() {
        return this._keyData
    }

    get calories() {
        return `${this._calories}kCal`
    }
    get proteines() {
        return `${this._proteines}g`
    }
    get glucides() {
        return `${this._glucides}g`
    }
    get lipides() {
        return `${this._lipides}g`
    }

    get score() {
        const tab = []
        tab.push({ score: this._score * 100, fill: '#FF0000' })
        return tab
    }
}
