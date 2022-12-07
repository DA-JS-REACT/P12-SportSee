export default class Perf {
    /**
     *
     * @param {array} data for perform by the user
     */
    constructor(data) {
        this._kind = data.kind
        this._dataOfperf = data.data
        this._translateENtoFR = data.kind
    }

    get kind() {
        return this._kind
    }

    get dataOfperf() {
        return this._dataOfperf
    }
    get translateENtoFR() {
        let translation = []
        let format = ''
        for (const key in this._translateENtoFR) {
            if (Object.hasOwnProperty.call(this._translateENtoFR, key)) {
                const element = this._translateENtoFR[key]
                if (element === 'cardio') {
                    format = {
                        subject: 'Cardio',
                        value: this._dataOfperf[0].value,
                    }
                    translation.push(format)
                } else if (element === 'energy') {
                    format = {
                        subject: 'Energie',
                        value: this._dataOfperf[1].value,
                    }
                    translation.push(format)
                } else if (element === 'endurance') {
                    format = {
                        subject: 'Endurance',
                        value: this._dataOfperf[2].value,
                    }
                    translation.push(format)
                } else if (element === 'strength') {
                    format = {
                        subject: 'Force',
                        value: this._dataOfperf[3].value,
                    }
                    translation.push(format)
                } else if (element === 'speed') {
                    format = {
                        subject: 'Vitesse',
                        value: this._dataOfperf[4].value,
                    }
                    translation.push(format)
                } else if (element === 'intensity') {
                    format = {
                        subject: 'Intensité',
                        value: this._dataOfperf[5].value,
                    }
                    translation.push(format)
                }
            }
        }
        return translation.reverse()
    }
}
