export default class User {
    /**
     *
     * @param {Object} data
     */
    constructor(data) {
        this._lastName = data.userInfos.lastName
        this._firstName = data.firstName
    }

    get lastName() {
        let name = this._lastName.slice(0, 1)
        return name
    }
    // get userInfos() {
    //     return this._userInfos.lastName
    // }
}
