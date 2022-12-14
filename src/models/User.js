/**
 * Represents the User with formated data
 */

export default class User {
    /**
     * @class Create formated data of user profil
     * @param {Object} data  data of users in API
     * @param {String} data.firstname
     * @param {Array.<{Object}>} data.keyData
     * @param {Number} data.calories
     * @param {Number} data.proteines
     * @param {Number} data.lipides
     * @param {Number} data.glucides
     * @param {Number} data.score
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
    /**
     * @return {Array.<Object>}
     */
    get score() {
        const tab = []
        tab.push({ score: this._score * 100, fill: '#FF0000' })
        return tab
    }
}
