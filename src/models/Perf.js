/**
 * Represents the performance of User with formated data
 */

export class Perf {
    /**
     * @class Create formated data of user performance
     * @param {Object} data data for perform by the user
     * @param {Array.<String>} data.kind
     * @param {Object} data.dataOfperf
     * @param {number} data.dataOfperf.value
     * @param {number} data.dataOfperf.kind
     */
    constructor(data) {
        this._kind = data.kind
        this._dataOfperf = data.dataOfperf
    }

    get kind() {
        return this._kind
    }
    /**
     * @property {function} dataOfperf Create a translation from EN to Fr of the values Kind with their values
     * @return {Array}
     */
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
