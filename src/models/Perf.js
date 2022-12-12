/**
 * Represents the performance of User with formated data
 */

export default class Perf {
    /**
     *
     * @param {array} data data for perform by the user
     */
    constructor(data) {
        this._kind = data.kind
        this._dataOfperf = data.dataOfperf
    }

    get kind() {
        return this._kind
    }

    get dataOfperf() {
        const translationToFr = [
            'Cardio',
            'Energie',
            'Endurance',
            'Force',
            'Vitesse',
            'Intensité',
        ]
        const newData = new Set()

        for (let i = 0; i < translationToFr.length; i++) {
            newData.add({
                subject: translationToFr[i],
                value: this._dataOfperf[i].value,
            })
        }

        return [...newData].reverse()
    }
}
