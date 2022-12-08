export function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export default function reshapeUser(data) {
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

export function reshapeeActivity(data) {
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
