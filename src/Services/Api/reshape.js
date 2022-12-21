// @ts-check
/**
 * contain function reshape of the paths to access the data
 */

/**
 * @function reshapeUser  define the path to the data
 * @param {Object} data - data to receive from Api endpoint user
 * @returns  {Object}
 */
export function reshapeUser(data) {
    const firstname = data.userInfos.firstName
    const keyData = data.keyData
    const calories = data.keyData.calorieCount
    const proteines = data.keyData.proteinCount
    const glucides = data.keyData.carbohydrateCount
    const lipides = data.keyData.lipidCount
    const score = data.score ? data.score : data.todayScore
    const newData = {
        firstname,
        keyData,
        calories,
        proteines,
        glucides,
        lipides,
        score,
    }

    return newData
}

/**
 * @function reshapeActivity  define the path to the data
 * @param {Object} data - data to receive from Api endpoint activity
 * @returns  {Object}
 */
export function reshapeActivity(data) {
    const date = data.day
    const day = data.day
    const kilogram = data.kilogram
    const calories = data.calories
    const newData = {
        date,
        day,
        kilogram,
        calories,
    }
    return newData
}

/**
 * @function reshapeAverage  define the path to the data
 * @param {Object} data - data to receive from Api endpoint average-sessions
 * @returns  {Object}
 */
export function reshapeAverage(data) {
    const day = data.day
    const formatDay = data.day
    const duration = data.sessionLength

    const newData = {
        day,
        formatDay,
        duration,
    }
    return newData
}

/**
 * @function reshapePerf  define the path to the data
 * @param {Object} data - data to receive from Api endpoint performance
 * @returns  {Object}
 */
export function reshapePerf(data) {
    const kind = data.kind
    const dataOfperf = data.data

    const newData = {
        kind,
        dataOfperf,
    }
    return newData
}
