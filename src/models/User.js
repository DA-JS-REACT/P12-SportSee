/**
 * Represents the User with formated data
 * @class Create formated data of user profil
 */

export class User {
    /**
     * @constructor
     * @param {Object} data  data of users in API
     * @param {String} data.firstname
     * @param {Object} data.keyData
     * @param {number} data.keyData.calorieCount
     * @param {number} data.keyData.proteinCount
     * @param {number} data.keyData.carbohydrateCount
     * @param {number} data.keyData.lipidCount
     * @param {number} data.calories
     * @param {number} data.proteines
     * @param {number} data.lipides
     * @param {number} data.glucides
     * @param {number} data.score
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
        const name = this._firstName[0].toUpperCase() + this._firstName.slice(1)
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
     * @property {function} score Create object containing value score in percent and color
     * @return {Array.<Object>}
     */
    get score() {
        const tab = []
        tab.push({ score: this._score * 100, fill: '#FF0000' })
        return tab
    }
}
