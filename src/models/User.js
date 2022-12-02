export default class User {
    /**
     *
     * @param {Object} data  data of users
     */
    constructor(data) {
        this._firstName = data.userInfos.firstName
        this._keyData = data.keyData
    }

    get firstName() {
        let name = this._firstName[0].toUpperCase() + this._firstName.slice(1)
        return name
    }
    get keyData() {
        return this._keyData
    }
}
