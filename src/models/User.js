export default class User {
    /**
     *
     * @param {Object} data  data of users
     */
    constructor(data) {
        this._firstName = data.userInfos.firstName
        this._keyData = data.keyData
        this._calories = data.keyData.calorieCount
        this._proteines = data.keyData.proteinCount
        this._glucides = data.keyData.carbohydrateCount
        this._lipides = data.keyData.lipidCount
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
}
